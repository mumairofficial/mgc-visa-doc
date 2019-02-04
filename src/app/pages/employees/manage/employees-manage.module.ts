import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared/shared.module";

import { ManageComponent } from "./manage.component";
import { AddEmployeeModalComponent } from "../components";

const routes: Routes = [
  {
    path: "",
    component: ManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class EmployeesManageRoutingModule {}

@NgModule({
  declarations: [ManageComponent, AddEmployeeModalComponent],
  imports: [SharedModule, EmployeesManageRoutingModule]
})
export class EmployeesManageModule {}
