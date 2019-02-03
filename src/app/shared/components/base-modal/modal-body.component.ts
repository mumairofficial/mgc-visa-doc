import { Component } from "@angular/core";

@Component({
  selector: 'base-modal-body',
  template: `
    <ng-content></ng-content>
  `
})
export class ModalBodyComponent {}
