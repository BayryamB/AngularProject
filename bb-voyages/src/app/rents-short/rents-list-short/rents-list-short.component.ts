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
    if (this.router.url === '/rents-short') {
      this.isMainPage = false;
    }
    this.api.getRentsShort().subscribe((rents) => {
      if (this.isMainPage) {
        this.rents = rents.slice(0, 4);
      } else {
        this.rents = rents;
      }
      this.isLoaded = true;
    });
  }

  navigateSingleRent(rent: Rent) {
    this.router.navigate(['/rents-short', rent._id]);
  }

  navigateToCreate() {
    this.router.navigate(['/add-rent-short']);
  }
}
