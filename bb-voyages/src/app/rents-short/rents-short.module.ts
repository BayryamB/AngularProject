import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentsListComponentShort } from './rents-list-short/rents-list-short.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [RentsListComponentShort],
  imports: [CommonModule, SharedModule],
  exports: [RentsListComponentShort],
})
export class RentsShortModule {}
