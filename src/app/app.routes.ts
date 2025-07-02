import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/welcome').then((m) => m.Welcome),
  },
  {
    path: 'futbol-grid',
    loadComponent: () =>
      import('./components/futbol-grid/futbol-grid').then((m) => m.FutbolGrid),
  },
  {
    path: 'memoria',
    loadComponent: () =>
      import('./components/memoria/memoria').then((m) => m.Memoria),
  },
  {
    path: 'top-positions',
    loadComponent: () =>
      import('./components/top-position/top-position').then(
        (m) => m.TopPosition
      ),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: '/',
  },
];
