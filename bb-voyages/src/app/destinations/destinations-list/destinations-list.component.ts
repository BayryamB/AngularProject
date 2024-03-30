import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { Destination } from 'src/app/types/destination';
@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css'],
})
export class DestinationsListComponent {
  destinations: Destination[] | undefined = undefined;
  isLoaded = false;
  constructor(private api: ApiService) {
    this.api.getDestinations().subscribe((destinations) => {
      this.destinations = destinations;
      this.isLoaded = true;
    });
  }
}
