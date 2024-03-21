import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentRentComponent } from './current-rent/current-rent.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { RentsListComponent } from './rents-list/rents-list.component';

const routes: Routes = [
  { path: 'rent', component: CurrentRentComponent },
  { path: 'add-rent', component: AddRentComponent },
  { path: 'rents', component: RentsListComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class RentsRoutingModule {}
