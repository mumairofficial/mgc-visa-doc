import { Component } from "@angular/core";

@Component({
  selector: 'app-layout-basic',
  template: `
    <div class="layout layout-nav-side">
      <left-navigation class="layout-nav-side"></left-navigation>

      <div class="main-container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class BasicLayoutComponent {}
