import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { options } from 'src/app/types/options';
import { Rent } from 'src/app/types/rent';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-rent-short',
  templateUrl: './current-rent-short.component.html',
  styleUrls: ['./current-rent-short.component.css'],
})
export class CurrentRentShortComponent {
  rent: Rent | undefined = undefined;
  isLoaded: boolean = false;
  currentOptions: options | undefined = undefined;
  isOwner: boolean = false;
  isLoggedIn: boolean = this.userService.isLoggedIn;
  isLiked: boolean = false;
  isInWatchlist: boolean = false;
  userId: string | undefined = this.userService.userId;
  user: User | undefined = undefined;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        this.api.getSingleRentShort(id).subscribe((rent) => {
          this.rent = rent;
          if (this.rent?.likes?.includes(this.userId || '')) {
            this.isLiked = true;
          }
          this.isLoaded = true;
          this.currentOptions = rent.options;
          if (this.userService.userId === rent.userId) {
            this.isOwner = true;
          }
          const user = this.api
            .getUser(this.userService?.userId || '')
            .subscribe((user) => {
              this.user = user;
              if (this.user?.watchlist?.includes(this.rent?._id!)) {
                this.isInWatchlist = true;
              }
            });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  updateRent() {
    this.router.navigate(['rents-short/edit', this.rent?._id]);
  }

  deleteRent() {
    this.api.deleteShortRent(this.rent?._id!).subscribe(() => {
      this.router.navigate(['/rents-short']);
    });
  }

  likeRent() {
    this.isLiked = true;
    this.rent?.likes?.push(this.userId || '');
    this.user?.likes?.push(this.rent?._id!);
    this.api.updateShortRent(this.rent?._id!, this.rent).subscribe(() => {
      this.ngOnInit();
    });
    this.api.updateUser(this.userId!, this.user).subscribe(() => {
      this.ngOnInit();
    });
  }

  unlikeRent() {
    this.isLiked = false;
    this.rent?.likes?.splice(this.rent?.likes?.indexOf(this.userId || ''), 1);
    this.user?.likes?.splice(this.user?.likes?.indexOf(this.rent?._id!), 1);
    this.api.updateShortRent(this.rent?._id!, this.rent).subscribe(() => {
      this.ngOnInit();
    });
    this.api.updateUser(this.userId!, this.user).subscribe(() => {
      this.ngOnInit();
    });
  }

  addToWatchlist() {
    this.user?.watchlist?.push(this.rent?._id!);
    this.api.updateUser(this.userId!, this.user).subscribe(() => {
      this.ngOnInit();
    });
  }

  removeFromWatchlist() {
    this.user?.watchlist?.splice(
      this.user?.watchlist?.indexOf(this.rent?._id!),
      1
    );
    this.api.updateUser(this.userId!, this.user).subscribe(() => {
      this.isInWatchlist = false;
      this.ngOnInit();
    });
  }
}
