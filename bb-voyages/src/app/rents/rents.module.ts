import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentRentComponent } from './current-rent/current-rent.component';
import { AddRentComponent } from './add-rent/add-rent.component';



@NgModule({
  declarations: [
    CurrentRentComponent,
    AddRentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RentsModule { }
