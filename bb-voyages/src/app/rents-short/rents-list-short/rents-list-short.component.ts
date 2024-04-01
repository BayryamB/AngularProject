import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Rent } from '../../types/rent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rents-list-short',
  templateUrl: './rents-list-short.component.html',
  styleUrls: ['./rents-list-short.component.css'],
})
export class RentsListComponentShort implements OnInit {
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
