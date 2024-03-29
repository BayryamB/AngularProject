import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginHandler(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    loginForm.reset();
    this.userService.login(username, password).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
