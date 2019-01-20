import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {DetailsComponent} from './details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class EmployeesDetailsRoutingModule {}


@NgModule({
  declarations: [ DetailsComponent ],
  imports: [ SharedModule, EmployeesDetailsRoutingModule ]
})
export class EmployeesDetailsModule {}
