import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';

@Component({
  selector: 'app-visa-application-manage',
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
      title: 'Visa Applications',
      url: '/visa-applications',
      active: false
    }
  ];
}
