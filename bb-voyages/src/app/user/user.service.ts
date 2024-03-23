import { Injectable } from '@angular/core';
import { UserLogin } from '../types/userLogin';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserLogin | undefined = undefined;
  USER_KEY = '[user]';
  get isLoggedIn(): boolean {
    return !!this.user;
  }
  constructor() {
    const user = localStorage.getItem(this.USER_KEY) || undefined;
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  login(user: UserLogin | undefined) {
    this.user = user;
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
