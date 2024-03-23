import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { UserLogin } from 'src/app/types/userLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userLogin: UserLogin | undefined = undefined;
  constructor(private userService: UserService) {}

  loginHandler(loginForm: NgForm) {
    const username = loginForm.value.username;
    const password = loginForm.value.password;
    this.userLogin = {
      username,
      password,
    };
    loginForm.reset();
    this.login(this.userLogin);
  }
  login(user: UserLogin | undefined) {
    this.userService.login(user);
  }
}
