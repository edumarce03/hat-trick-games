import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  id: number;
  playerId: number;
  playerName: string;
  imagePath: string;
  isFlipped: boolean;
  isMatched: boolean;
  isCurrentUserSelection: boolean;
  isCurrentBotSelection: boolean;
}

interface Team {
  id: number;
  name: string;
  logoPath: string;
  players: Player[];
}

interface Player {
  id: number;
  name: string;
  imagePath: string;
}

type GameState =
  | 'team-selection'
  | 'difficulty-selection'
  | 'initial-view'
  | 'playing'
  | 'game-over';
type Difficulty = 'facil' | 'medio';
type CurrentPlayer = 'user' | 'bot';

@Component({
  selector: 'app-memoria',
  imports: [CommonModule],
  templateUrl: './memoria.html',
})
export class Memoria {
  private router = inject(Router);

  gameState = signal<GameState>('team-selection');
  selectedTeam = signal<Team | null>(null);
  difficulty = signal<Difficulty | null>(null);
  cards = signal<Card[]>([]);
  currentPlayer = signal<CurrentPlayer>('user');
  userScore = signal(0);
  botScore = signal(0);
  showModal = signal(false);
  isProcessing = signal(false);

  gameFinished = computed(
    () =>
      this.cards().length > 0 && this.cards().every((card) => card.isMatched)
  );

  private flippedCards: Card[] = [];
  private initialViewTimer?: number;
  private botTimer?: number;
  private matchCheckTimer?: number;

  readonly teams: Team[] = [
    {
      id: 1,
      name: 'Alianza Lima',
      logoPath: 'assets/images/teams/alianza-lima.png',
      players: [
        {
          id: 1,
          name: 'Guillermo Viscarra',
          imagePath: 'assets/images/players/vizcarra.png',
        },
        {
          id: 2,
          name: 'Renzo Garcés',
          imagePath: 'assets/images/players/renzo-garces.png',
        },
        {
          id: 3,
          name: 'Erick Noriega',
          imagePath: 'assets/images/players/erick-noriega.png',
        },
        {
          id: 4,
          name: 'Miguel Trauco',
          imagePath: 'assets/images/players/miguel-trauco.png',
        },
        {
          id: 5,
          name: 'Carlos Zambrano',
          imagePath: 'assets/images/players/carlos-zambrano.png',
        },
        {
          id: 6,
          name: 'Pablo Cepellini',
          imagePath: 'assets/images/players/pablo-cepellini.png',
        },
        {
          id: 7,
          name: 'Paolo Guerrero',
          imagePath: 'assets/images/players/paolo-guerrero.png',
        },
        {
          id: 8,
          name: 'Hernán Barcos',
          imagePath: 'assets/images/players/hernan-barcos.png',
        },
      ],
    },
    {
      id: 2,
      name: 'Universitario',
      logoPath: 'assets/images/teams/universitario.png',
      players: [
        {
          id: 9,
          name: 'Sebastian Britos',
          imagePath: 'assets/images/players/sebastian-britos.png',
        },
        {
          id: 10,
          name: 'Aldo Corzo',
          imagePath: 'assets/images/players/aldo-corzo.png',
        },
        {
          id: 11,
          name: 'Jairo Concha',
          imagePath: 'assets/images/players/jairo-concha.png',
        },
        {
          id: 12,
          name: 'Jairo Velez',
          imagePath: 'assets/images/players/jairo-velez.png',
        },
        {
          id: 13,
          name: 'Edinson Flores',
          imagePath: 'assets/images/players/edinson-flores.png',
        },
        {
          id: 14,
          name: 'Andy Polo',
          imagePath: 'assets/images/players/andy-polo.png',
        },
        {
          id: 15,
          name: 'José Rivera',
          imagePath: 'assets/images/players/jose-rivera.png',
        },
        {
          id: 16,
          name: 'Alex Valera',
          imagePath: 'assets/images/players/alex-valera.png',
        },
      ],
    },
    {
      id: 3,
      name: 'Barcelona',
      logoPath: 'assets/images/teams/barcelona.png',
      players: [
        {
          id: 17,
          name: 'Robert Lewandowski',
          imagePath: 'assets/images/players/lewandowski.png',
        },
        {
          id: 18,
          name: 'Wojciech Szczesny',
          imagePath: 'assets/images/players/szczesny.png',
        },
        {
          id: 19,
          name: 'Alejandro Balde',
          imagePath: 'assets/images/players/alejandro-balde.png',
        },
        {
          id: 20,
          name: 'Pau Cubarsí',
          imagePath: 'assets/images/players/pau-cubarsi.png',
        },
        { id: 21, name: 'Pedri', imagePath: 'assets/images/players/pedri.png' },
        {
          id: 22,
          name: 'Frenkie de Jong',
          imagePath: 'assets/images/players/frenkie-dejong.png',
        },
        {
          id: 23,
          name: 'Raphinha',
          imagePath: 'assets/images/players/raphinha.png',
        },
        {
          id: 24,
          name: 'Lamine Yamal',
          imagePath: 'assets/images/players/yamal.png',
        },
      ],
    },
    {
      id: 4,
      name: 'Real Madrid',
      logoPath: 'assets/images/teams/real-madrid.png',
      players: [
        {
          id: 25,
          name: 'Thibaut Courtois',
          imagePath: 'assets/images/players/courtois.png',
        },
        {
          id: 26,
          name: 'Raul Asencio',
          imagePath: 'assets/images/players/raul-asencio.png',
        },
        {
          id: 27,
          name: 'Antonio Rüdiger',
          imagePath: 'assets/images/players/rudiger.png',
        },
        {
          id: 28,
          name: 'Jude Bellingham',
          imagePath: 'assets/images/players/jude-bellingham.png',
        },
        {
          id: 29,
          name: 'Eduardo Camavinga',
          imagePath: 'assets/images/players/camavinga.png',
        },
        {
          id: 30,
          name: 'Brahim Díaz',
          imagePath: 'assets/images/players/brahim.png',
        },
        {
          id: 31,
          name: 'Arda Guler',
          imagePath: 'assets/images/players/arda-guler.png',
        },
        {
          id: 32,
          name: 'Kylian Mbappé',
          imagePath: 'assets/images/players/mbappe.png',
        },
      ],
    },
  ];

  selectTeam(team: Team): void {
    this.selectedTeam.set(team);
    this.gameState.set('difficulty-selection');
  }

  selectDifficulty(difficulty: Difficulty): void {
    this.difficulty.set(difficulty);
    this.initializeGame();
  }

  private initializeGame(): void {
    const team = this.selectedTeam();
    if (!team) return;

    this.clearTimers();
    this.resetGameState();
    this.createCards(team);
    this.shuffleCards();
    this.showInitialCards();
  }

  private createCards(team: Team): void {
    const newCards: Card[] = [];
    let cardId = 0;

    team.players.forEach((player) => {
      for (let i = 0; i < 2; i++) {
        newCards.push({
          id: cardId++,
          playerId: player.id,
          playerName: player.name,
          imagePath: player.imagePath,
          isFlipped: false,
          isMatched: false,
          isCurrentUserSelection: false,
          isCurrentBotSelection: false,
        });
      }
    });

    this.cards.set(newCards);
  }

  private shuffleCards(): void {
    const shuffled = [...this.cards()];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.cards.set(shuffled);
  }

  private showInitialCards(): void {
    this.gameState.set('initial-view');

    this.cards.update((cards) =>
      cards.map((card) => ({ ...card, isFlipped: true }))
    );

    this.initialViewTimer = window.setTimeout(() => {
      this.cards.update((cards) =>
        cards.map((card) => ({ ...card, isFlipped: false }))
      );
      this.gameState.set('playing');
      this.currentPlayer.set('user');
    }, 1000);
  }

  flipCard(card: Card): void {
    if (
      this.isProcessing() ||
      card.isFlipped ||
      card.isMatched ||
      this.currentPlayer() !== 'user' ||
      this.gameState() !== 'playing'
    ) {
      return;
    }

    this.isProcessing.set(true);

    this.cards.update((cards) =>
      cards.map((c) =>
        c.id === card.id
          ? { ...c, isFlipped: true, isCurrentUserSelection: true }
          : c
      )
    );

    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    } else {
      this.isProcessing.set(false);
    }
  }

  private checkMatch(): void {
    this.matchCheckTimer = window.setTimeout(() => {
      const [card1, card2] = this.flippedCards;
      const isMatch = card1.playerId === card2.playerId;
      const currentPlayer = this.currentPlayer();

      if (isMatch) {
        this.cards.update((cards) =>
          cards.map((c) => {
            if (c.id === card1.id || c.id === card2.id) {
              return {
                ...c,
                isMatched: true,
                isCurrentUserSelection: false,
                isCurrentBotSelection: false,
              };
            }
            return c;
          })
        );

        if (currentPlayer === 'user') {
          this.userScore.update((score) => score + 1);
        } else {
          this.botScore.update((score) => score + 1);
        }
      } else {
        this.cards.update((cards) =>
          cards.map((c) => {
            if (c.id === card1.id || c.id === card2.id) {
              return {
                ...c,
                isFlipped: false,
                isCurrentUserSelection: false,
                isCurrentBotSelection: false,
              };
            }
            return c;
          })
        );

        this.currentPlayer.set(currentPlayer === 'user' ? 'bot' : 'user');
      }

      this.flippedCards = [];
      this.isProcessing.set(false);

      if (this.gameFinished()) {
        this.showModal.set(true);
        return;
      }

      if (this.currentPlayer() === 'bot') {
        this.botTimer = window.setTimeout(() => this.botTurn(), 800);
      }
    }, 1200);
  }

  private botTurn(): void {
    if (this.currentPlayer() !== 'bot' || this.isProcessing()) return;

    this.isProcessing.set(true);
    const availableCards = this.cards().filter(
      (card) => !card.isFlipped && !card.isMatched
    );

    if (availableCards.length === 0) {
      this.isProcessing.set(false);
      return;
    }

    const { card1, card2 } = this.getBotMove(availableCards);

    this.cards.update((cards) =>
      cards.map((c) =>
        c.id === card1.id
          ? { ...c, isFlipped: true, isCurrentBotSelection: true }
          : c
      )
    );

    this.flippedCards.push(card1);

    this.botTimer = window.setTimeout(() => {
      this.cards.update((cards) =>
        cards.map((c) =>
          c.id === card2.id
            ? { ...c, isFlipped: true, isCurrentBotSelection: true }
            : c
        )
      );

      this.flippedCards.push(card2);
      this.checkMatch();
    }, 800);
  }

  private getBotMove(availableCards: Card[]): { card1: Card; card2: Card } {
    const difficulty = this.difficulty();

    if (difficulty === 'medio') {
      const perfectMove = this.findPerfectMove(availableCards);
      if (perfectMove && Math.random() < 0.3) {
        return perfectMove;
      }
    }

    const card1 =
      availableCards[Math.floor(Math.random() * availableCards.length)];
    const remaining = availableCards.filter((c) => c.id !== card1.id);
    const card2 = remaining[Math.floor(Math.random() * remaining.length)];

    return { card1, card2 };
  }

  private findPerfectMove(
    availableCards: Card[]
  ): { card1: Card; card2: Card } | null {
    for (let i = 0; i < availableCards.length; i++) {
      for (let j = i + 1; j < availableCards.length; j++) {
        if (availableCards[i].playerId === availableCards[j].playerId) {
          return { card1: availableCards[i], card2: availableCards[j] };
        }
      }
    }
    return null;
  }

  private resetGameState(): void {
    this.userScore.set(0);
    this.botScore.set(0);
    this.currentPlayer.set('user');
    this.isProcessing.set(false);
    this.showModal.set(false);
    this.flippedCards = [];
  }

  private clearTimers(): void {
    if (this.initialViewTimer) {
      clearTimeout(this.initialViewTimer);
      this.initialViewTimer = undefined;
    }
    if (this.botTimer) {
      clearTimeout(this.botTimer);
      this.botTimer = undefined;
    }
    if (this.matchCheckTimer) {
      clearTimeout(this.matchCheckTimer);
      this.matchCheckTimer = undefined;
    }
  }

  closeModal(): void {
    this.showModal.set(false);
  }

  resetGame(): void {
    this.clearTimers();
    this.gameState.set('team-selection');
    this.selectedTeam.set(null);
    this.difficulty.set(null);
    this.cards.set([]);
    this.resetGameState();
  }

  goToNextRoute(): void {
    this.clearTimers();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }
}
