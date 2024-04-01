import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsListComponentShort } from './rents-list-short/rents-list-short.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentRentShortComponent } from './current-rent-short/current-rent-short.component';
import { AddRentShortComponent } from './add-rent-short/add-rent-short.component';
import { UpdateRentShortComponent } from './update-rent-short/update-rent-short.component';
import { RentsRoutingModule } from '../rents-long/rents-routing.module';
import { RentsShortRoutingModule } from './rents-short-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RentsListComponentShort,
    CurrentRentShortComponent,
    AddRentShortComponent,
    UpdateRentShortComponent,
  ],
  imports: [CommonModule, SharedModule, RentsRoutingModule, FormsModule],
  exports: [RentsListComponentShort, RentsShortRoutingModule],
})
export class RentsShortModule {}
