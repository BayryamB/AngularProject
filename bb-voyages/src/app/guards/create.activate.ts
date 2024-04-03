import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class CreateGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.service.isLoggedIn;
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
