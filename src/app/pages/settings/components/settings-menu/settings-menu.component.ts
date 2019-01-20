import { Component } from "@angular/core";

@Component({
  selector: 'settings-menu',
  template: `
    <ul class="nav nav-tabs flex-lg-column">
      <li class="nav-item" *ngFor="let item of menu">
        <a class="nav-link" [routerLink]="item.url" [routerLinkActive]="'active'">{{item.title}}</a>
      </li>
    </ul>
  `
})
export class SettingsMenuComponent {
  menu = [
    {
      title: 'Your Profile',
      url: '/settings/profile'
    },
    {
      title: 'Password',
      url: '/settings/password'
    }
  ]
}
