import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentRentComponent } from './current-rent/current-rent.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { RentsListComponent } from './rents-list/rents-list.component';
import { AuthActivate } from '../guards/auth.activate';
import { UpdateRentComponent } from './update-rent/update-rent.component';

const routes: Routes = [
  { path: 'rent', component: CurrentRentComponent },
  {
    path: 'add-rent',
    component: AddRentComponent,
    canActivate: [AuthActivate],
  },
  { path: 'rents/edit/:id', component: UpdateRentComponent },
  { path: 'rents', component: RentsListComponent },
  { path: 'rents/:id', component: CurrentRentComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class RentsRoutingModule {}
