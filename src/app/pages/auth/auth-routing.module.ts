import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignUpModule'
  },
  {
    path: 'forgot',
    loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  {
    path: 'activate',
    loadChildren: './activate/activate.module#ActivateModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule {}
