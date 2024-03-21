import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { CurrentOfferComponent } from './current-offer/current-offer.component';



@NgModule({
  declarations: [
    OffersListComponent,
    CurrentOfferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OffersModule { }
