import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './manage/employees-manage.module#EmployeesManageModule'
  },
  {
    path: ':id',
    loadChildren: './details/employees-details.module#EmployeesDetailsModule'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class EmployeesRoutingModule {}
