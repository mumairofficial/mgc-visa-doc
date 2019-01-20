import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivateComponent } from "./activate.component";

const routes: Routes = [
  {
    path: ":activation_url",
    component: ActivateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ActivateRoutingModule {}

// Activate Module
@NgModule({
  declarations: [ActivateComponent],
  imports: [ActivateRoutingModule]
})
export class ActivateModule {}
