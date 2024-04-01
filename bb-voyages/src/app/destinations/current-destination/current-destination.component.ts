import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Destination } from 'src/app/types/destination';

@Component({
  selector: 'app-current-destination',
  templateUrl: './current-destination.component.html',
  styleUrls: ['./current-destination.component.css'],
})
export class CurrentDestinationComponent {
  destination: Destination | undefined = undefined;
  photos: string[] = [];
  constructor(private api: ApiService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.api.getSingleDestination(id).subscribe((destination) => {
        this.destination = destination!;
        this.photos = destination.photos;
      });
    }
  }
}
