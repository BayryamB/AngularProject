import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { sendRent } from 'src/app/types/sendRent';
import { NgForm } from '@angular/forms';
import { location } from 'src/app/types/location';
import { options } from 'src/app/types/options';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css'],
})
export class AddRentComponent {
  rent: sendRent | undefined = undefined;
  userId = this.userService.userId;
  constructor(
    private api: ApiService,
    private router: Router,
    private userService: UserService
  ) {}

  addRentHandler(addRentForm: NgForm) {
    const location: location = {
      country: addRentForm.value.country,
      city: addRentForm.value.city,
    };
    const cover = addRentForm.value.cover;
    const description = addRentForm.value.description;
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
      userId: this.userId!,
      date: `${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinutes}`,
      location,
      cover,
      description,
      likes: [],
      price,
      photos,
      options,
    };
    this.api.addRent(this.rent).subscribe((data) => console.log(data));
    addRentForm.reset();
    this.router.navigate(['/rents']);
  }
}
