import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './manage/visa-application-manage.module#VisaApplicationManageModule'
  },
  {
    path: 'new',
    loadChildren: './new-application/new-application.module#NewApplicationModule'
  },
  {
    path: ':id',
    loadChildren: './details/visa-application-details.module#VisaApplicationDetailsModule'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class VisaApplicationsRoutingModule {}
