import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { CurrentDestinationComponent } from './current-destination/current-destination.component';
import { AddDestinationComponent } from './add-destination/add-destination.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'destinations',
    component: DestinationsListComponent,
  },
  {
    path: 'destinations/:id',
    component: CurrentDestinationComponent,
  },
  {
    path: 'destinations/add',
    component: AddDestinationComponent,
    canActivate: [AuthActivate],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class DestinationsRoutingModule {}
