import { Component, ViewChild, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BaseModal } from "@shared/components/base-modal";

@Component({
  selector: 'add-employee-modal',
  templateUrl: 'add-employee-modal.component.html'
})
export class AddEmployeeModalComponent implements OnInit {
  @ViewChild('addEmployeeModal') addEmployeeModal: BaseModal;
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initiateForm();
  }

  show() {
    this.addEmployeeModal.show();
  }

  alert(message: string, type: string): void {
    this.addEmployeeModal.alert(message, type);
  }

  public onAddEmployee(): void {
    this.confirm.emit(this.form.value);
  }

  public toggleLoading(): void {
    this.addEmployeeModal.toggleLoading();
  }

  private initiateForm() {
    this.form = this.fb.group({
      fullName: [''],
      designation: [''],
      employeeId: [''],
      passport: [''],
      cnic: [''],
      address: ['']
    });
  }

  // get fullName() { return this.form.get('fullName'); }
  // get designation() { return this.form.get('designation'); }
  // get employeeId() { return this.form.get('employeeId'); }
  // get passport() { return this.form.get('passport'); }
  // get cnic() { return this.form.get('cnic'); }
  // get address() { return this.form.get('address'); }

}
