import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RentsModule } from './rents/rents.module';
import { OffersModule } from './offers/offers.module';
import { FormsModule } from '@angular/forms';
import { DestinationsModule } from './destinations/destinations.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, BookingListComponent, MainPageComponent],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    RentsModule,
    OffersModule,
    DestinationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
