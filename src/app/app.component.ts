import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements AfterViewInit {
  title = 'pipeline-project-management';

  ngAfterViewInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
  }
}
