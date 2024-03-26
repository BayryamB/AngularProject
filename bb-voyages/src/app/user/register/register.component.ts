import { Component } from '@angular/core';
import { UserRegister } from 'src/app/types/userRegister';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userRegister: UserRegister | undefined = undefined;

  constructor(private userService: UserService, private router: Router) {}

  registerHandler(registerForm: NgForm) {
    const username = registerForm.value.username;
    const password = registerForm.value.password;
    const email = registerForm.value.email;
    const confirmPassword = registerForm.value.confirm_password;
    if (password === confirmPassword) {
      this.userRegister = {
        username,
        password,
        email,
      };

      this.userService.register(username, password, email).subscribe(() => {
        this.router.navigate(['/']);
      });
      console.log(this.userRegister);
      registerForm.reset();
    } else {
      alert('Passwords do not match');
    }
  }
}
