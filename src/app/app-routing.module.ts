import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './ui/about/about.component';
import { MentalRotationComponent } from './tests/mental-rotation/mental-rotation.component';

export const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mental-rotation', component: MentalRotationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
