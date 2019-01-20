import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "@shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class ProfileRoutingModule {}


@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, ProfileRoutingModule]
})
export class ProfileModule {}
