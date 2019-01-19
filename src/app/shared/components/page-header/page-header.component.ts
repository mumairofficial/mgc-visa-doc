import {Component} from '@angular/core';

@Component({
  selector: 'page-header',
  template: `
    <div class="page-header">
      <ng-content></ng-content>
    </div>
  `
})
export class PageHeaderComponent {}
