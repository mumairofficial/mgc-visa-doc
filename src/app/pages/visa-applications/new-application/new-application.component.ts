import {Component} from '@angular/core';
import {BreadCrumb} from '@shared/models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-visa-application-new',
  templateUrl: 'new-application.component.html'
})

export class NewApplicationComponent {
  breadCrumb: Array<BreadCrumb> = [
    {
      title: 'Overview',
      url: '/overview',
      active: false
    },
    {
      title: 'Visa Applications',
      url: '/visa-application',
      active: false
    },
    {
      title: 'New',
      url: '/visa-application/new',
      active: true
    }
  ];

  constructor(private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      console.log(params);
    });
  }
}
