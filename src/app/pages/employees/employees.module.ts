import {NgModule} from '@angular/core';
import {EmployeesRoutingModule} from './employees-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [ EmployeesRoutingModule, SharedModule ],
  declarations: [],
})
export class EmployeesModule {}
