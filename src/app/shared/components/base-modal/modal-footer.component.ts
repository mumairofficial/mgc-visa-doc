import { Component } from "@angular/core";

@Component({
  selector: 'base-modal-footer',
  template: `
    <div class="modal-footer">
      <ng-content></ng-content>
    </div>  
  `
})
export class ModalFooterComponent {}
