import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup.component";

const routes: Routes = [
  {
    path: "",
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class SignUpRoutingModule {}

// Activate Module
@NgModule({
  declarations: [ SignUpComponent ],
  imports: [SignUpRoutingModule]
})
export class SignUpModule {}
