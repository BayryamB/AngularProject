import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Announcement } from './types/announcment';
import { Rent } from './types/rent';
import { sendRent } from './types/sendRent';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBookings() {
    const { apiUrl } = environment;
    return this.http.get<Announcement[]>(`${apiUrl}/bookings`);
  }

  getRents() {
    const { apiUrl } = environment;
    return this.http.get<Announcement[]>(`${apiUrl}/rents`);
  }

  getSingleRent(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Rent>(`${apiUrl}/rents/${id}`);
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
}
