import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentsListComponentShort } from './rents-short/rents-list-short/rents-list-short.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  //{ path: 'rents-short', component: RentsListComponentShort },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
