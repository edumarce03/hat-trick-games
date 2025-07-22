import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  COLUMN_TEAMS,
  Player,
  PLAYERS,
  ROW_TEAMS,
} from '../../data/football-data';
import { Router, RouterModule } from '@angular/router';
import { AppHeader } from '../app-header';
import { AnimatedBackground } from '../animated-background';

interface Cell {
  rowTeam: string;
  colTeam: string;
  player: Player | null;
  isCorrect: boolean;
}

@Component({
  selector: 'app-futbol-grid',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppHeader,
    AnimatedBackground,
  ],
  templateUrl: './futbol-grid.html',
})
export class FutbolGrid {
  playerInput = signal('');
  message = signal('');
  isSuccess = signal(false);
  isInfo = signal(false);
  recentlyFilledCell = signal<{ row: number; col: number } | null>(null);
  filteredPlayers = signal<Player[]>([]);
  private router = inject(Router);

  columnTeams = COLUMN_TEAMS;
  rowTeams = ROW_TEAMS;
  players = PLAYERS;

  grid = signal<Cell[][]>([]);

  constructor() {
    this.initializeGrid();
  }

  onImageError(event: any, type: 'player' | 'team') {
    const img = event.target as HTMLImageElement;
    if (type === 'player') {
      img.src = 'assets/images/players/default-player.png';
    } else {
      img.src = 'assets/images/default-team.png';
    }
  }

  initializeGrid() {
    const newGrid: Cell[][] = [];
    for (let i = 0; i < 3; i++) {
      newGrid[i] = [];
      for (let j = 0; j < 3; j++) {
        newGrid[i][j] = {
          rowTeam: this.rowTeams[i].name,
          colTeam: this.columnTeams[j].name,
          player: null,
          isCorrect: false,
        };
      }
    }
    this.grid.set(newGrid);
  }

  filterPlayers() {
    const input = this.playerInput().toLowerCase().trim();
    if (input.length === 0) {
      this.filteredPlayers.set([]);
      return;
    }

    const filtered = this.players.filter(
      (player) =>
        player.name.toLowerCase().includes(input) &&
        !this.usedPlayers().includes(player.name)
    );
    this.filteredPlayers.set(filtered);
  }

  selectPlayer(player: Player) {
    this.playerInput.set(player.name);
    this.filteredPlayers.set([]);
    this.searchPlayer();
  }

  searchPlayer() {
    const input = this.playerInput().trim();
    if (!input) {
      this.message.set('Ingresa el nombre de un jugador');
      this.isSuccess.set(false);
      this.isInfo.set(false);
      return;
    }

    const player = this.players.find(
      (p) =>
        p.name.toLowerCase().includes(input.toLowerCase()) ||
        input.toLowerCase().includes(p.name.toLowerCase())
    );

    if (!player) {
      this.message.set(`No se encontró al jugador "${input}"`);
      this.isSuccess.set(false);
      this.isInfo.set(false);
      return;
    }

    const isAlreadyUsed = this.grid()
      .flat()
      .some(
        (cell) => cell.player?.name.toLowerCase() === player.name.toLowerCase()
      );

    if (isAlreadyUsed) {
      this.message.set(`${player.name} ya está en uso`);
      this.isSuccess.set(false);
      this.isInfo.set(false);
      return;
    }

    const possibleCells: { row: number; col: number }[] = [];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = this.grid()[i][j];
        if (!cell.player) {
          const hasPlayedInRowTeam = player.teams.includes(cell.rowTeam);
          const hasPlayedInColTeam = player.teams.includes(cell.colTeam);

          if (hasPlayedInRowTeam && hasPlayedInColTeam) {
            possibleCells.push({ row: i, col: j });
          }
        }
      }
    }

    if (possibleCells.length === 0) {
      this.message.set(`${player.name} no encaja en ninguna celda disponible`);
      this.isSuccess.set(false);
      this.isInfo.set(false);
      return;
    }

    if (possibleCells.length > 1) {
      const cellDescriptions = possibleCells
        .map(
          (cell) =>
            `${this.rowTeams[cell.row].name} × ${
              this.columnTeams[cell.col].name
            }`
        )
        .join(', ');
      this.message.set(
        `${player.name} puede ir en: ${cellDescriptions}. Sé más específico.`
      );
      this.isSuccess.set(false);
      this.isInfo.set(true);
      return;
    }

    const targetCell = possibleCells[0];
    const newGrid = [...this.grid()];
    newGrid[targetCell.row][targetCell.col] = {
      ...newGrid[targetCell.row][targetCell.col],
      player: player,
      isCorrect: true,
    };
    this.grid.set(newGrid);

    this.recentlyFilledCell.set(targetCell);
    setTimeout(() => this.recentlyFilledCell.set(null), 1000);

    const rowTeam = this.rowTeams[targetCell.row].name;
    const colTeam = this.columnTeams[targetCell.col].name;

    this.message.set(`¡Correcto! ${player.name} → ${rowTeam} × ${colTeam}`);
    this.isSuccess.set(true);
    this.isInfo.set(false);
    this.playerInput.set('');
    this.filteredPlayers.set([]);
  }

  getCell(row: number, col: number): Cell {
    return this.grid()[row][col];
  }

  isRecentlyFilled(row: number, col: number): boolean {
    const recent = this.recentlyFilledCell();
    return recent?.row === row && recent?.col === col;
  }

  getPlayerPhoto(playerName: string): string {
    const player = this.players.find((p) => p.name === playerName);
    return player?.photo || 'assets/images/players/default-player.png';
  }

  completedCells = computed(() => {
    return this.grid()
      .flat()
      .filter((cell) => cell.isCorrect).length;
  });

  usedPlayers = computed(() => {
    return this.grid()
      .flat()
      .filter((cell) => cell.player)
      .map((cell) => cell.player!.name);
  });

  progressPercentage = computed(() => {
    return (this.completedCells() / 9) * 100;
  });

  isGameComplete = computed(() => {
    return this.completedCells() === 9;
  });

  resetGame() {
    this.initializeGrid();
    this.playerInput.set('');
    this.message.set('');
    this.isSuccess.set(false);
    this.isInfo.set(false);
    this.recentlyFilledCell.set(null);
    this.filteredPlayers.set([]);
  }

  goToNextRoute() {
    this.router.navigate(['/']);
    this.resetGame();
  }
}
