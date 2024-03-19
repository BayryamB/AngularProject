import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getBookings() {
    const { apiUrl } = environment;

    return this.http.get<any>(`http://localhost:3030/api/bookings`);
  }
}
