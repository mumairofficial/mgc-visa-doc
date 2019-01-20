import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';

@Component({
  selector: 'app-employee-manage',
  templateUrl: 'manage.component.html'
})

export class ManageComponent {
  breadCrumb: Array<BreadCrumb> = [
    {
      title: 'Overview',
      url: '/overview',
      active: false
    },
    {
      title: 'Employees',
      url: '/employees',
      active: false
    }
  ];
}
