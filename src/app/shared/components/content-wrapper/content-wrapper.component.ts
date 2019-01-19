import { Component } from '@angular/core';

@Component({
  selector: 'content-wrapper',
  template: `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-9">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})

export class ContentWrapperComponent {}
