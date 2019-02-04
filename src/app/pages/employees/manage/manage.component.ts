import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {BreadCrumb} from '@shared/models';
import { AddEmployeeModalComponent } from '../components';

@Component({
  selector: 'app-employee-manage',
  templateUrl: 'manage.component.html'
})

export class ManageComponent implements AfterViewInit {
  @ViewChild('newEmployeeModal') newEmployeeModal: AddEmployeeModalComponent;
  breadCrumb: Array<BreadCrumb> = [
    {
      title: 'Overview',
      url: '/overview',
      active: false
    },
    {
      title: 'Employees',
      url: '/employees',
      active: false
    }
  ];

  public onAddEmployee(newEmployeeData: any): void {
    this.newEmployeeModal.toggleLoading();
    console.log(newEmployeeData);
    setTimeout(() => {
      this.newEmployeeModal.toggleLoading();
      this.newEmployeeModal.alert('Hello man, this is working', 'success');
    }, 3000);
  }

  ngAfterViewInit() {
    this.newEmployeeModal.show();
  }
}
