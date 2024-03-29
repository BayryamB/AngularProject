import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';
import { UserNameDirective } from './validators/user-name.directive';

@NgModule({
  declarations: [LoaderComponent, EmailDirective, UserNameDirective],
  imports: [CommonModule],
  exports: [LoaderComponent, EmailDirective, UserNameDirective],
})
export class SharedModule {}
