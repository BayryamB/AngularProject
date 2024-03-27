import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegister } from '../types/userRegister';
import { UserLogin } from '../types/userLogin';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserLogin | undefined = undefined;
  USER_KEY = '[user]';
  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get userId(): string | undefined {
    return this.user?.userId;
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
    return this.http
      .post<UserRegister>(`${apiUrl}/register`, {
        username,
        password,
        email,
      })
      .pipe(
        map((response) => {
          if (this.user) {
            this.user.userId = response.userId;
          }
          localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
        })
      );
  }

  login(username: string, password: string) {
    this.user = { username, password };
    return this.http
      .post<UserLogin>(`${environment.apiUrl}/login`, this.user)
      .pipe(
        map((response) => {
          console.log(response);
          debugger;
          if (this.user) {
            this.user.userId = response.userId;
          }
          localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
        })
      );
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
