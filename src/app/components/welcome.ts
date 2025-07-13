import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Game {
  id: string;
  title: string;
  description: string;
  route: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
})
export class Welcome {
  games: Game[] = [
    {
      id: '1',
      title: 'Fútbol Grid',
      description:
        'Completa una cuadrícula 3x3 con futbolistas que cumplan los criterios de filas y columnas.',
      route: '/futbol-grid',
      backgroundImage: 'assets/background1.png',
    },
    {
      id: '2',
      title: 'Memoria',
      description: 'Encuentra las parejas de cartas y pon a prueba tu memoria.',
      route: '/memoria',
      backgroundImage: 'assets/background2.jpg',
    },
    {
      id: '3',
      title: 'Top Positions',
      description:
        'Completa una lista de 10 jugadores según un título, con ayuda de sus naciones como pista.',
      route: '/top-positions',
      backgroundImage: 'assets/background3.jpg',
    },
  ];
}
