import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentRentShortComponent } from './current-rent-short/current-rent-short.component';
import { AddRentShortComponent } from './add-rent-short/add-rent-short.component';
import { AuthActivate } from '../guards/auth.activate';
import { UpdateRentShortComponent } from './update-rent-short/update-rent-short.component';
import { RentsListComponentShort } from './rents-list-short/rents-list-short.component';

const routes: Routes = [
  {
    path: 'add-rent-short',
    component: AddRentShortComponent,
    canActivate: [AuthActivate],
  },
  { path: 'rents-short/edit/:id', component: UpdateRentShortComponent },
  { path: 'rents-short', component: RentsListComponentShort },
  { path: 'rents-short/:id', component: CurrentRentShortComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class RentsShortRoutingModule {}
