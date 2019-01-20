import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { SharedModule } from "@shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule {}

// Activate Module
@NgModule({
  declarations: [ LoginComponent ],
  imports: [SharedModule, LoginRoutingModule]
})
export class LoginModule {}
