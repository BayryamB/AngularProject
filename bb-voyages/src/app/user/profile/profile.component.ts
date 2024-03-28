import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: User | undefined = undefined;
  userId: string = this.service.userId!;
  constructor(
    private service: UserService,
    private router: Router,
    private api: ApiService
  ) {
    try {
      this.api.getUser(this.userId).subscribe((user) => {
        this.user = user;
      });
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
}
