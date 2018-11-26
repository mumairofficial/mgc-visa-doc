import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './404/404.component';

const routes: Routes = [
  {
    path: '404',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ErrorRoutingModule {}
