import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: null,
    children: [
      {
        path: 'profile',
        loadChildren: ''
      },
      {
        path: 'password',
        loadChildren: ''
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class SettingsRoutingModule {}
