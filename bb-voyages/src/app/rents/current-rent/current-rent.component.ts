import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { options } from 'src/app/types/options';
import { Rent } from 'src/app/types/rent';

@Component({
  selector: 'app-current-rent',
  templateUrl: './current-rent.component.html',
  styleUrls: ['./current-rent.component.css'],
})
export class CurrentRentComponent {
  rent: Rent | undefined = undefined;
  isLoaded: boolean = false;
  currentOptions: options | undefined = undefined;
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        this.api.getSingleRent(id).subscribe((rent) => {
          this.rent = rent;
          this.isLoaded = true;
          console.log(rent);
          this.currentOptions = rent.options;
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
