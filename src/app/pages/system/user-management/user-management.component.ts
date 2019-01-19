import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';

@Component({
  selector: 'app-system-user-management',
  templateUrl: 'user-management.component.html'
})
export class UserManagementComponent {
  breadcrumb: Array<BreadCrumb> = [
    {
      title: 'System',
      url: '/system/user-management',
      active: false
    },
    {
      title: 'Users Management',
      url: '/system/user-management',
      active: true
    }
  ];
}
