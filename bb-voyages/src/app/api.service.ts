import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Announcement } from './types/announcment';
import { Rent } from './types/rent';

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

  addRent(rent: Rent) {
    const { apiUrl } = environment;
    return this.http.post(`${apiUrl}/rents`, { rent });
  }
}
