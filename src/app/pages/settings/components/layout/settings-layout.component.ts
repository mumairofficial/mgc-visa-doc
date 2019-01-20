import { Component } from "@angular/core";

@Component({
  selector: 'app-settings-page-layout',
  template: `
    <content-wrapper>
      <div class="col-lg-3 mb-3">
        <settings-menu></settings-menu>
      </div>

      <div class="col-xl-8 col-lg-9">
        <div class="card">
          <router-outlet></router-outlet>
        </div>
      </div>
    <content-wrapper>
  `
})
export class SettingsLayoutComponent {}
