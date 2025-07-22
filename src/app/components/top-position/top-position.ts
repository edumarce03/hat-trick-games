import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppHeader } from '../app-header';

interface Player {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  revealed: boolean;
}

interface GameCategory {
  id: number;
  title: string;
  description: string;
  players: Player[];
}

@Component({
  selector: 'app-top-position',
  imports: [CommonModule, FormsModule, RouterModule, AppHeader],
  templateUrl: './top-position.html',
})
export class TopPosition implements OnInit {
  private router = inject(Router);

  private categories: GameCategory[] = [
    {
      id: 1,
      title: 'Balón de Oro - Top 10 Histórico',
      description: 'Los jugadores con más Balones de Oro en la historia',
      players: [
        {
          id: 1,
          name: 'Lionel Messi',
          country: 'Argentina',
          countryCode: 'ar',
          revealed: false,
        },
        {
          id: 2,
          name: 'Cristiano Ronaldo',
          country: 'Portugal',
          countryCode: 'pt',
          revealed: false,
        },
        {
          id: 3,
          name: 'Johan Cruyff',
          country: 'Países Bajos',
          countryCode: 'pb',
          revealed: false,
        },
        {
          id: 4,
          name: 'Michel Platini',
          country: 'Francia',
          countryCode: 'fr',
          revealed: false,
        },
        {
          id: 5,
          name: 'Marco van Basten',
          country: 'Países Bajos',
          countryCode: 'pb',
          revealed: false,
        },
        {
          id: 6,
          name: 'Ronaldo Nazário',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
        {
          id: 7,
          name: 'Luka Modrić',
          country: 'Croacia',
          countryCode: 'cr',
          revealed: false,
        },
        {
          id: 8,
          name: 'Kaká',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
        {
          id: 9,
          name: 'Zinedine Zidane',
          country: 'Francia',
          countryCode: 'fr',
          revealed: false,
        },
        {
          id: 10,
          name: 'Ronaldinho',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
      ],
    },

    {
      id: 2,
      title: 'Máximos Goleadores Champions League',
      description:
        'Los jugadores con más goles en la historia de la UEFA Champions League',
      players: [
        {
          id: 1,
          name: 'Cristiano Ronaldo',
          country: 'Portugal',
          countryCode: 'pt',
          revealed: false,
        },
        {
          id: 2,
          name: 'Lionel Messi',
          country: 'Argentina',
          countryCode: 'ar',
          revealed: false,
        },
        {
          id: 3,
          name: 'Robert Lewandowski',
          country: 'Polonia',
          countryCode: 'pl',
          revealed: false,
        },
        {
          id: 4,
          name: 'Karim Benzema',
          country: 'Francia',
          countryCode: 'fr',
          revealed: false,
        },
        {
          id: 5,
          name: 'Raúl González',
          country: 'España',
          countryCode: 'es',
          revealed: false,
        },
        {
          id: 6,
          name: 'Ruud van Nistelrooy',
          country: 'Países Bajos',
          countryCode: 'pb',
          revealed: false,
        },
        {
          id: 7,
          name: 'Thierry Henry',
          country: 'Francia',
          countryCode: 'fr',
          revealed: false,
        },
        {
          id: 8,
          name: 'Alfredo Di Stéfano',
          country: 'España',
          countryCode: 'es',
          revealed: false,
        },
        {
          id: 9,
          name: 'Andriy Shevchenko',
          country: 'Ucrania',
          countryCode: 'ua',
          revealed: false,
        },
        {
          id: 10,
          name: 'Zlatan Ibrahimović',
          country: 'Suecia',
          countryCode: 'se',
          revealed: false,
        },
      ],
    },

    {
      id: 3,
      title: 'Mejores Jugadores por IFFHS',
      description:
        'Lista de los 10 mejores jugadores de fútbol de la historia según la IFFHS',
      players: [
        {
          id: 1,
          name: 'Lionel Messi',
          country: 'Argentina',
          countryCode: 'ar',
          revealed: false,
        },
        {
          id: 2,
          name: 'Pelé',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
        {
          id: 3,
          name: 'Diego Maradona',
          country: 'Argentina',
          countryCode: 'ar',
          revealed: false,
        },
        {
          id: 4,
          name: 'Cristiano Ronaldo',
          country: 'Portugal',
          countryCode: 'pt',
          revealed: false,
        },
        {
          id: 5,
          name: 'Johan Cruyff',
          country: 'Países Bajos',
          countryCode: 'pb',
          revealed: false,
        },
        {
          id: 6,
          name: 'Ronaldo Nazario',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
        {
          id: 7,
          name: 'Zinedine Zidane',
          country: 'Francia',
          countryCode: 'fr',
          revealed: false,
        },
        {
          id: 8,
          name: 'Franz Beckenbauer',
          country: 'Alemania',
          countryCode: 'alem',
          revealed: false,
        },
        {
          id: 9,
          name: 'Alfredo Di Stefano',
          country: 'Argentina',
          countryCode: 'ar',
          revealed: false,
        },
        {
          id: 10,
          name: 'Ronaldinho',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
      ],
    },

    {
      id: 4,
      title: 'Mundiales - Máximos Goleadores',
      description:
        'Los jugadores con más goles en la historia de los Mundiales FIFA',
      players: [
        {
          id: 1,
          name: 'Miroslav Klose',
          country: 'Alemania',
          countryCode: 'alem',
          revealed: false,
        },
        {
          id: 2,
          name: 'Ronaldo Nazário',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
        {
          id: 3,
          name: 'Gerd Müller',
          country: 'Alemania',
          countryCode: 'alem',
          revealed: false,
        },
        {
          id: 4,
          name: 'Just Fontaine',
          country: 'Francia',
          countryCode: 'fr',
          revealed: false,
        },
        {
          id: 5,
          name: 'Pelé',
          country: 'Brasil',
          countryCode: 'br',
          revealed: false,
        },
        {
          id: 6,
          name: 'Sándor Kocsis',
          country: 'Hungría',
          countryCode: 'hu',
          revealed: false,
        },
        {
          id: 7,
          name: 'Jürgen Klinsmann',
          country: 'Alemania',
          countryCode: 'alem',
          revealed: false,
        },
        {
          id: 8,
          name: 'Helmut Rahn',
          country: 'Alemania',
          countryCode: 'alem',
          revealed: false,
        },
        {
          id: 9,
          name: 'Gary Lineker',
          country: 'Inglaterra',
          countryCode: 'ing',
          revealed: false,
        },
        {
          id: 10,
          name: 'Gabriel Batistuta',
          country: 'Argentina',
          countryCode: 'ar',
          revealed: false,
        },
      ],
    },
  ];

  currentCategory = signal<GameCategory | null>(null);
  currentGuess = signal('');
  score = signal(0);
  attempts = signal(0);
  gameCompleted = signal(false);
  showHint = signal(false);

  ngOnInit() {
    this.currentCategory.set(this.getRandomCategory());
    this.resetGame();
  }

  revealedPlayers = computed(() => {
    const category = this.currentCategory();
    return category ? category.players.filter((p) => p.revealed).length : 0;
  });

  progress = computed(() => {
    const category = this.currentCategory();
    if (!category) return 0;
    const total = category.players.length;
    return Math.round((this.revealedPlayers() / total) * 100);
  });

  getRandomCategory(): GameCategory {
    const randomIndex = Math.floor(Math.random() * this.categories.length);
    const selectedCategory = this.categories[randomIndex];

    return {
      ...selectedCategory,
      players: selectedCategory.players.map((p) => ({ ...p, revealed: false })),
    };
  }

  makeGuess(): void {
    const guess = this.currentGuess().trim();
    const category = this.currentCategory();

    if (!guess || !category) return;

    const player = category.players.find((p) => {
      if (p.revealed) return false;

      const normalizedGuess = this.normalizeString(guess);
      const normalizedName = this.normalizeString(p.name);

      if (normalizedName === normalizedGuess) return true;

      const nameWords = normalizedName.split(' ');
      const guessWords = normalizedGuess.split(' ');

      return nameWords.some((nameWord) =>
        guessWords.some(
          (guessWord) =>
            nameWord === guessWord ||
            nameWord.includes(guessWord) ||
            guessWord.includes(nameWord)
        )
      );
    });

    this.attempts.update((a) => a + 1);

    if (player) {
      player.revealed = true;
      this.score.update((s) => s + 1);

      this.currentCategory.set({ ...category });

      if (this.revealedPlayers() === 10) {
        this.gameCompleted.set(true);
      }
    }

    this.currentGuess.set('');
  }

  normalizeString(str: string): string {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  toggleHint(): void {
    this.showHint.update((hint) => !hint);
  }

  resetGame(): void {
    this.score.set(0);
    this.attempts.set(0);
    this.gameCompleted.set(false);
    this.showHint.set(false);
    this.currentGuess.set('');

    const category = this.currentCategory();
    if (category) {
      category.players.forEach((p) => (p.revealed = false));
      this.currentCategory.set({ ...category });
    }
  }

  startNewGame(): void {
    this.currentCategory.set(this.getRandomCategory());
    this.resetGame();
  }

  goToNextRoute(): void {
    this.router.navigate(['/']);
  }
}
