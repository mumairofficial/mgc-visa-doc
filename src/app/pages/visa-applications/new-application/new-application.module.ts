import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {NewApplicationComponent} from './new-application.component';
import { EmployeeSelectionModalComponent } from '../components/employee-selection-modal/employee-selection-modal.component';

const routes: Routes = [
  {
    path: '',
    component: NewApplicationComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class NewApplicationRoutingModule {}


@NgModule({
  declarations: [ NewApplicationComponent, EmployeeSelectionModalComponent ],
  imports: [ SharedModule, NewApplicationRoutingModule ]
})
export class NewApplicationModule {}
