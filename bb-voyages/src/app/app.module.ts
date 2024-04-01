import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RentsModule } from './rents-long/rents.module';
import { OffersModule } from './offers/offers.module';
import { FormsModule } from '@angular/forms';
import { DestinationsModule } from './destinations/destinations.module';
import { MainPageComponent } from './main-page/main-page.component';
import { RentsShortModule } from './rents-short/rents-short.module';
@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    RentsModule,
    RentsShortModule,
    OffersModule,
    DestinationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
