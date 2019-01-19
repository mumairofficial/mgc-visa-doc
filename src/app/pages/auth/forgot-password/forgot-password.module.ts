import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password.component";

const routes: Routes = [
  {
    path: "",
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ForgotPasswordRoutingModule {}

// Activate Module
@NgModule({
  imports: [ForgotPasswordRoutingModule]
})
export class ForgotPasswordModule {}
