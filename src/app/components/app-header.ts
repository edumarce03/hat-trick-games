import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <nav class="bg-black/90 backdrop-blur-sm border-b border-gray-700/30 py-6">
      <div class="max-w-6xl mx-auto px-4 flex items-center justify-center">
        <h1
          routerLink="/"
          class="text-2xl font-black flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span class="text-white">HatTrick</span>
          <span
            class="bg-gradient-to-r from-purple-700 to-orange-600 text-white px-3 py-1 text-xl font-black transform rotate-3"
          >
            GAMES
          </span>
        </h1>
      </div>
    </nav>
  `,
})
export class AppHeader {}
