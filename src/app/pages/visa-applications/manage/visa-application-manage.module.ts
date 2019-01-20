import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {ManageComponent} from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class VisaApplicationManageRoutingModule {}


@NgModule({
  declarations: [ ManageComponent ],
  imports: [ SharedModule, VisaApplicationManageRoutingModule ]
})
export class VisaApplicationManageModule {}
