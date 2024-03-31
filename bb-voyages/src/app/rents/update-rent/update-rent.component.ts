import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Rent } from 'src/app/types/rent';

@Component({
  selector: 'app-update-rent',
  templateUrl: './update-rent.component.html',
  styleUrls: ['./update-rent.component.css'],
})
export class UpdateRentComponent {
  rent: Rent | undefined = undefined;
  rentId: string = '';
  isCheckedWifi: boolean = false;
  isCheckedParking: boolean = false;
  isCheckedBreakfast: boolean = false;
  isCheckedPets: boolean = false;
  isCheckedSmoking: boolean = false;
  updatedRent: Rent | undefined = undefined;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.rentId = this.route.snapshot.paramMap.get('id') || '';
    this.api.getSingleRent(this.rentId).subscribe((rent: Rent) => {
      this.rent = rent;
      if (this.rent.options) {
        if (this.rent.options.wifi) {
          this.isCheckedWifi = true;
        }
        if (this.rent.options.parking) {
          this.isCheckedParking = true;
        }
        if (this.rent.options.breakfast) {
          this.isCheckedBreakfast = true;
        }
        if (this.rent.options.pets) {
          this.isCheckedPets = true;
        }
        if (this.rent.options.smoking) {
          this.isCheckedSmoking = true;
        }
      }
    });
  }

  changeStateWifi() {
    this.isCheckedWifi = !this.isCheckedWifi;
  }
  changeStateParking() {
    this.isCheckedParking = !this.isCheckedParking;
  }
  changeStateBreakfast() {
    this.isCheckedBreakfast = !this.isCheckedBreakfast;
  }
  changeStatePets() {
    this.isCheckedPets = !this.isCheckedPets;
  }
  changeStateSmoking() {
    this.isCheckedSmoking = !this.isCheckedSmoking;
  }

  updateRentHandler(updateRentForm: NgForm) {
    const formValues = updateRentForm.value;
    this.updatedRent = this.rent;
    if (formValues.country !== '') {
      this.updatedRent!.location!.country = formValues.country;
    }
    if (formValues.city !== '') {
      this.updatedRent!.location!.city = formValues.city;
    }
    if (formValues.cover !== '') {
      this.updatedRent!.cover = formValues.cover;
    }
    if (formValues.description !== '') {
      this.updatedRent!.description = formValues.description;
    }
    if (formValues.highlights !== '') {
      this.updatedRent!.highlights = formValues.highlights;
    }
    if (formValues.price !== '') {
      this.updatedRent!.price = formValues.price;
    }
    if (formValues.photo1 !== '') {
      this.updatedRent!.photos![0] = formValues.photo1;
    }
    if (formValues.photo2 !== '') {
      this.updatedRent!.photos![1] = formValues.photo2;
    }
    if (formValues.photo3 !== '') {
      this.updatedRent!.photos![2] = formValues.photo3;
    }

    const options = {
      wifi: this.isCheckedWifi,
      parking: this.isCheckedParking,
      breakfast: this.isCheckedBreakfast,
      pets: this.isCheckedPets,
      smoking: this.isCheckedSmoking,
    };
    this.updatedRent!.options = options;

    this.api.updateRent(this.rentId, this.updatedRent).subscribe(() => {
      this.router.navigate(['/rents']);
    });
  }
}
