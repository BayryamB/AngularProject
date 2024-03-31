import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/rent';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rents-list',
  templateUrl: './rents-list.component.html',
  styleUrls: ['./rents-list.component.css'],
})
export class RentsListComponent implements OnInit {
  isLoaded: boolean = false;
  isMainPage: boolean = true;
  rents: Rent[] = [];
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    if (this.router.url === '/rents') {
      this.isMainPage = false;
    }
    this.api.getRents().subscribe((rents) => {
      this.rents = rents;
      this.isLoaded = true;
    });

    return;
  }

  clickCard(rent: Rent) {
    this.router.navigate(['/rents', rent._id]);
  }

  navigateToCreate() {
    this.router.navigate(['/add-rent']);
  }
}
