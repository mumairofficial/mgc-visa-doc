import { Component, ViewChild } from "@angular/core";
import { BaseModal } from "@shared/components/base-modal";

@Component({
  selector: 'employee-selection-modal',
  templateUrl: 'employee-selection-modal.component.html'
})
export class EmployeeSelectionModalComponent {
  @ViewChild('employeeSelectionModal') employeeSelectionModal: BaseModal;

  show(): void {
    this.employeeSelectionModal.show()
  }
}
