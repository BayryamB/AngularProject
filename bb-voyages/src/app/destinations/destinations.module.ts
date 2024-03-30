import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { CurrentDestinationComponent } from './current-destination/current-destination.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { DestinationsRoutingModule } from './destinations-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DestinationsListComponent,
    CurrentDestinationComponent,
    AddDestinationComponent,
  ],
  imports: [CommonModule, DestinationsRoutingModule, SharedModule],
})
export class DestinationsModule {}
