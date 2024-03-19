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
  actual: Announcement[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getBookings().subscribe((announcements) => {
      this.announcements = announcements;
      if (this.announcements.length <= 4) {
        this.actual = this.announcements;
      } else if (this.announcements.length <= 8) {
        this.actual = this.announcements.slice(0, 4);
      } else {
        this.actual = this.announcements.slice(0, 8);
      }
    });
  }
}
