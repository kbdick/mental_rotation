import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'login', component: UserLoginComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
