import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(private router: Router) {
  }

  redirectToOverview() {
    this.router.navigate(['/overview'])
  }
}
