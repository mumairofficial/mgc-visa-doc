import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PasswordComponent } from "./password.component";
import { SharedModule } from "@shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: PasswordComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class PasswordRoutingModule {}

@NgModule({
  declarations: [ PasswordComponent ],
  imports: [ SharedModule, PasswordRoutingModule ],
})
export class PasswordModule {}
