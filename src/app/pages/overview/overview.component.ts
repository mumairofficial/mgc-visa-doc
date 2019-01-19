import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html'
})
export class OverviewComponent {
  public breadCrumb = [
    {
      url: '/overview',
      title: 'Overview',
      active: true
    },
    // {
    //   url: '/app-pages',
    //   title: 'App Pages',
    //   active: false
    // },
    // {
    //   url: '',
    //   title: 'Team',
    //   active: true
    // }
  ];
}
