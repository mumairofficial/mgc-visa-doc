import { Component, OnInit } from '@angular/core';
import {BreadCrumb} from '@shared/models';

@Component({
  selector: 'app-system-countries-component',
  templateUrl: 'countries.component.html'
})
export class CountriesComponent implements OnInit {
  breadCrumb: Array<BreadCrumb> = [
    {
      title: 'Overview',
      url: '/overview',
      active: false
    },
    {
      title: 'System',
      url: '/system/countries',
      active: false
    },
    {
      title: 'Countries',
      url: '/system/countries',
      active: true
    },
  ];

  constructor() {}

  ngOnInit() {}
}
