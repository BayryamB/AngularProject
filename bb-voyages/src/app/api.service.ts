import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Rent } from './types/rent';
import { sendRent } from './types/sendRent';
import { User } from './types/user';
import { Destination } from './types/destination';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRentsShort() {
    const { apiUrl } = environment;
    return this.http.get<Rent[]>(`${apiUrl}/short`);
  }
  getSingleRentShort(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Rent>(`${apiUrl}/short/${id}`);
  }

  addShortRent(rent: sendRent | undefined) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/short`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, rent, { headers });
  }

  updateShortRent(id: string, rent: Rent | undefined) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/short/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(url, rent, { headers });
  }

  deleteShortRent(id: string) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/short/${id}`;
    return this.http.delete(url);
  }

  getRents() {
    const { apiUrl } = environment;
    return this.http.get<Rent[]>(`${apiUrl}/rents`);
  }

  getDestinations() {
    const { apiUrl } = environment;
    return this.http.get<Destination[]>(`${apiUrl}/destinations`);
  }

  getSingleRent(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Rent>(`${apiUrl}/rents/${id}`);
  }

  getSingleDestination(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Destination>(`${apiUrl}/destinations/${id}`);
  }

  addRent(rent: sendRent | undefined) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/rents`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, rent, { headers });
  }

  updateRent(id: string, rent: Rent | undefined) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/rents/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(url, rent, { headers });
  }

  deleteRent(id: string) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/rents/${id}`;
    return this.http.delete(url);
  }

  getUser(userId: string) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/users/${userId}`;
    return this.http.get<User>(url);
  }

  updateUser(userId: string, user: User | undefined) {
    const { apiUrl } = environment;
    const url = `${apiUrl}/users/${userId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(url, user, { headers });
  }
}
