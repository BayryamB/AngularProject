import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Announcement } from '../types/announcment';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
})
export class BookingListComponent implements OnInit {
  announcements: Announcement[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getBookings().subscribe((announcements) => {
      this.announcements = announcements;
      console.log(this.announcements);
    });
  }
}
