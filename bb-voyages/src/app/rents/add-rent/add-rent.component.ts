import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/rent';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css'],
})
export class AddRentComponent {
  constructor(private api: ApiService) {}

  addRent(rent: Rent) {
    this.api.addRent(rent);
  }
}
