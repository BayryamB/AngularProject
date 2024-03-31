import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { RentsListComponent } from '../rents/rents-list/rents-list.component';
import { Rent } from '../types/rent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  rents: Rent[] = [];
  isLoaded: boolean = false;
  isMainPage: boolean = true;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/bookings') {
      this.isMainPage = false;
    }
    this.api.getBookings().subscribe((rents) => {
      this.rents = rents;
      this.isLoaded = true;
    });
  }
}
