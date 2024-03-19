import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MainComponent, BookingListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
