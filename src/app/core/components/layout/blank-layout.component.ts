import { Component } from "@angular/core";

@Component({
  selector: 'app-layout-blank',
  template: `
    <div class="main-container fullscreen">
      <router-outlet></router-outlet>
    </div>
  `
})
export class BlankLayoutComponent {}
