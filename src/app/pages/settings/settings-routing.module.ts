import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SettingsLayoutComponent } from "./components/layout/settings-layout.component";

const routes: Routes = [
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      },
      {
        path: 'password',
        loadChildren: './password/password.module#PasswordModule'
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class SettingsRoutingModule {}
