import { Component } from "@angular/core";

@Component({
  selector: 'app-settings-page-layout',
  template: `
    <app-bread-crumb [items]=""></app-bread-crumb>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-3 mb-3">
          <settings-menu></settings-menu>
        </div>

        <div class="col-xl-8 col-lg-9">
          <div class="card">
            <div class="card-body">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
      <div>
    </div>
  `
})
export class SettingsLayoutComponent {}
