import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ActivateComponent } from './activate/activate.component';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ActivateComponent
  ],
  providers: []
})
export class AuthModule {}
