import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-icon',
  template: `<i class="material-icons">{{name}}</i>`
})
export class MdIconComponent {
  @Input() name = '';
}
