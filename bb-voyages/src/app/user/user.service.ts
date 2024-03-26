import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../types/userRegister';
import { UserLogin } from '../types/userLogin';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserLogin | undefined = undefined;
  USER_KEY = '[user]';
  get isLoggedIn(): boolean {
    return !!this.user;
  }

  set setInLocalStorage(user: UserLogin | undefined) {
    this.user = user;
    if (user) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  constructor(private http: HttpClient) {
    const userSession = localStorage.getItem(this.USER_KEY) || undefined;
    if (userSession) {
      this.user = JSON.parse(userSession);
    }
  }

  register(username: string, password: string, email: string) {
    const { apiUrl } = environment;
    this.user = { username, password };
    this.setInLocalStorage = { username, password };
    return this.http.post<UserRegister>(`${apiUrl}/register`, {
      username,
      password,
      email,
    });
  }

  login(username: string, password: string) {
    return this.http.post<UserLogin>(`${environment.apiUrl}/login`, {
      username,
      password,
    });
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
