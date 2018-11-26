import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';
import { Error404Component } from './404/404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ErrorRoutingModule, RouterModule],
  declarations: [Error404Component]
})
export class ErrorModule {}
