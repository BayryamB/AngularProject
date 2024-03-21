import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/rent';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
@Component({
  selector: 'app-rents-list',
  templateUrl: './rents-list.component.html',
  styleUrls: ['./rents-list.component.css'],
})
export class RentsListComponent implements OnInit {
  isLoaded: boolean = false;
  rents: Rent[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getRents().subscribe((rents) => {
      this.rents = rents;
      this.isLoaded = true;
    });
    return;
  }
}
