import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserManagementComponent} from './user-management.component';
import {SharedModule} from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UserManagementRoutingModule {}

@NgModule({
  declarations: [UserManagementComponent],
  imports: [SharedModule, UserManagementRoutingModule]
})
export class UserManagementModule {}
