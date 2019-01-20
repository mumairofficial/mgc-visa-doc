import { Component } from "@angular/core";
import { BreadCrumb } from "@shared/models";
import { SettingsService } from "../settings.service";

@Component({
  selector: 'app-setting-user-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
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
      title: 'Profile',
      url: '',
      active: true
    }
  ]
  
  constructor(private settingService: SettingsService) {
    settingService.breadCrumb = [...this.breadCrumb];
  }
}
