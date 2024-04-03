import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../guards/auth.activate';
import { UserGuard } from '../guards/logged.activate';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UserGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UserGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
