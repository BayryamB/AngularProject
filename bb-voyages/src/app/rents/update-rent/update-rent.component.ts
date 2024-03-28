import { Component } from '@angular/core';
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
      console.log(rent);
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

  updateRentHandler(updateRentForm: any) {
    const location = {
      country: updateRentForm.value.country,
      city: updateRentForm.value.city,
    };
    const cover = updateRentForm.value.cover;
    const description = updateRentForm.value.description;
    const highlights = updateRentForm.value.highlights;
    const price = updateRentForm.value.price;
    const photos = [
      updateRentForm.value.photo1,
      updateRentForm.value.photo2,
      updateRentForm.value.photo3,
    ];
    const options = {
      wifi: this.isCheckedWifi,
      parking: this.isCheckedParking,
      breakfast: this.isCheckedBreakfast,
      pets: this.isCheckedPets,
      smoking: this.isCheckedSmoking,
    };
    this.updatedRent = {
      userId: this.rent?.userId!,
      date: this.rent?.date!,
      location: location,
      cover: cover,
      description: description,
      highlights: highlights,
      price: price,
      photos: photos,
      options,
      _id: this.rent?._id!,
      __v: this.rent?.__v!,
    };
    console.log(this.updatedRent);
    this.api.updateRent(this.rentId, this.updatedRent).subscribe(() => {
      this.router.navigate(['/rents']);
      console.log('Rent updated successfully');
    });
  }
}
