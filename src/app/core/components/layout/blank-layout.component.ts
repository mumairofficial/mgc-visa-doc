import { Component } from "@angular/core";

@Component({
  selector: 'app-layout-blank',
  template: `
    <div class="main-container fullscreen">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class BlankLayoutComponent {}
