import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: 'bread-crumb.component.html'
})
export class BreadCrumbComponent {
  @Input() items;
}
