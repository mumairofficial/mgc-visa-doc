import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visa-application-details',
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
      title: 'Visa Applications',
      url: '/visa-applications',
      active: false
    },
    {
      title: 'Jane Doe',
      url: '/visa-applications/janedoe',
      active: true
    }
  ];

  constructor(private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      console.log(params);
    });
  }
}
