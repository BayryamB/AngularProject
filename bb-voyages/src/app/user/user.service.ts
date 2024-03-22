import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {} || undefined;
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

  login() {
    this.user = {
      username: 'admin',
      password: 'admin',
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
