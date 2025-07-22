import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-background',
  imports: [],
  template: `
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-32 left-16 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
      ></div>

      <div
        class="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-bounce"
      ></div>

      <div
        class="absolute top-1/2 right-10 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl animate-ping"
      ></div>

      <div
        class="absolute top-20 right-1/3 w-48 h-48 bg-purple-600/25 rounded-full blur-3xl animate-spin"
        style="animation-duration: 20s;"
      ></div>

      <div
        class="absolute bottom-40 left-1/2 w-56 h-56 bg-orange-600/20 rounded-full blur-3xl animate-pulse"
        style="animation-duration: 3s; animation-delay: 1.5s;"
      ></div>
    </div>
  `,
})
export class AnimatedBackground {}
