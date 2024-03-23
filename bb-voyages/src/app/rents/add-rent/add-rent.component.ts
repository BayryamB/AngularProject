import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { sendRent } from 'src/app/types/sendRent';
import { NgForm } from '@angular/forms';
import { location } from 'src/app/types/location';
import { options } from 'src/app/types/options';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css'],
})
export class AddRentComponent {
  rent: sendRent | undefined = undefined;
  constructor(private api: ApiService) {}

  addRentHandler(addRentForm: NgForm) {
    const location: location = {
      country: addRentForm.value.country,
      city: addRentForm.value.city,
    };
    const cover = addRentForm.value.cover;
    const description = addRentForm.value.description;
    const highlights = addRentForm.value.highlights;
    const price = addRentForm.value.price;
    const photos = [
      addRentForm.value.photo1,
      addRentForm.value.photo2,
      addRentForm.value.photo3,
    ];
    const options: options = {
      wifi: addRentForm.value.wifi ? true : false,
      parking: addRentForm.value.parking ? true : false,
      breakfast: addRentForm.value.breakfast ? true : false,
      pets: addRentForm.value.pets ? true : false,
      smoking: addRentForm.value.smoking ? true : false,
    };
    const currentDate = new Date();

    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so we add 1 to get the actual month
    const currentYear = currentDate.getFullYear();
    //Need to change after making authentication
    this.rent = {
      userId: '609fd64984bc153b54e51a11',
      date: `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinutes}`,
      location,
      cover,
      description,
      highlights,
      price,
      photos,
      options,
    };
    this.addRent(this.rent);
    addRentForm.reset();
  }

  addRent(rent: sendRent | undefined) {
    this.api.addRent(rent).subscribe((data) => console.log(data));
  }
}
