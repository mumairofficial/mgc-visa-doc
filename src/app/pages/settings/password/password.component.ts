import { Component } from "@angular/core";
import { SettingsService } from "../settings.service";
import { BreadCrumb } from "@shared/models";

@Component({
  selector: 'app-setting-password',
  templateUrl: 'password.component.html'
})
export class PasswordComponent {
  breadCrumb: Array<BreadCrumb> = [
    {
      title: 'Overview',
      url: '/overview',
      active: false
    },
    {
      title: 'Account Setting',
      url: '',
      active: false
    },
    {
      title: 'Password',
      url: '',
      active: true
    }
  ]
  
  constructor(private settingService: SettingsService) {
    settingService.breadCrumb = [...this.breadCrumb];
  }
}
