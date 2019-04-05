import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { AboutComponent } from './about/about.component';
import { MentalRotationComponent } from '../tests/mental-rotation/mental-rotation.component';

@NgModule({
  declarations: [
    UserLoginComponent, 
    UserProfileComponent, 
    UserFormComponent,
    HeaderComponent,
    LayoutComponent, 
    FooterComponent, 
    LoadingSpinnerComponent, 
    NotificationMessageComponent, 
    AboutComponent, MentalRotationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    NotificationMessageComponent,
    UserProfileComponent,
    UserFormComponent,
    AboutComponent]
})
export class UiModule { }
