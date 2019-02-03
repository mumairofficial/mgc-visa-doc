import { Component, OnInit, ViewChild } from '@angular/core';
import {BreadCrumb} from '@shared/models';
import { BaseModal } from '@shared/components/base-modal';

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

  @ViewChild('countryModal') countryModal: BaseModal;

  constructor() {}

  ngOnInit() {}

  onCountryModalOpen() {
    this.countryModal.show();
  }
}
