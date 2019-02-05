import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: 'details.component.html'
})

export class DetailsComponent {
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
    },
    {
      title: 'John Doe',
      url: '/employees/johndoe',
      active: true
    }
  ];

  constructor(private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      console.log(params);
    });
  }
}
