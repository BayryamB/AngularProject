import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  get isLoggedIn(): boolean {
    console.log(this.userService.isLoggedIn);
    return this.userService.isLoggedIn;
  }

  logout() {
    this.userService.logout();
  }
}
