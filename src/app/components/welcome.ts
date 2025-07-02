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
        'Adivina la posición de los jugadores en el campo y demuestra tu conocimiento futbolístico.',
      route: '/futbol-grid',
      backgroundImage: 'assets/background1.jpg',
    },
    {
      id: '2',
      title: 'Memoria',
      description:
        'Encuentra las parejas de cartas iguales y pon a prueba tu memoria visual.',
      route: '/memoria',
      backgroundImage: 'assets/background2.jpg',
    },
    {
      id: '3',
      title: 'Top Positions',
      description:
        'Clasifica a los mejores jugadores y crea tu ranking perfecto.',
      route: '/top-positions',
      backgroundImage: 'assets/background3.jpg',
    },
  ];
}
