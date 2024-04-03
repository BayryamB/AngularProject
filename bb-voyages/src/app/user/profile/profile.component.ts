import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/types/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: User | undefined = undefined;
  userId: string = this.service.userId!;
  inEditMode: boolean = false;
  newEmail = '';
  newUsername = '';
  isProfileUpdated: boolean = false;
  watchList: string[] = [];
  rentsInWatchList: string[] = [];
  likesList: string[] = [];
  constructor(
    private service: UserService,
    private router: Router,
    private api: ApiService
  ) {
    try {
      this.api.getUser(this.userId).subscribe((user) => {
        this.user = user;
        this.newEmail = user.email;
        this.newUsername = user.username;
        this.watchList = user.watchlist;
        this.likesList = user.likes;
        if (user.watchlist.length > 0) {
          try {
            for (const id of this.watchList) {
              const responseFromLongRent = this.api
                .getSingleRent(id)
                .subscribe((rent) => {
                  if (rent) {
                    this.rentsInWatchList?.push(rent.location.country);
                  }
                });
              const responseFromShortRent = this.api
                .getSingleRentShort(id)
                .subscribe((rent) => {
                  if (rent) {
                    this.rentsInWatchList?.push(rent.location.country);
                  }
                });
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }

  updateProfile(updateForm: NgForm) {
    const formChanges = updateForm.valueChanges?.subscribe((value) => {
      if (value.email !== '') {
        this.newEmail = value.email;
      }
      if (value.username !== '') {
        this.newUsername = value.username;
      }
    });
  }

  saveProfile() {
    if (this.user) {
      this.user.email = this.newEmail;
      this.user.username = this.newUsername;
      this.api.updateUser(this.userId, this.user).subscribe(() => {
        this.inEditMode = false;
      });
    }
    this.isProfileUpdated = true;
  }
}
