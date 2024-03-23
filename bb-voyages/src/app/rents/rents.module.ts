import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentRentComponent } from './current-rent/current-rent.component';
import { AddRentComponent } from './add-rent/add-rent.component';
import { RentsRoutingModule } from './rents-routing.module';
import { RentsListComponent } from './rents-list/rents-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrentRentComponent, AddRentComponent, RentsListComponent],
  imports: [CommonModule, RentsRoutingModule, SharedModule, FormsModule],
})
export class RentsModule {}
