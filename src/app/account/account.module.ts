import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppMaterialModule } from '../app-material/app-material.module';
//import { AuthService, AuthGuard } from './';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule,
    AppMaterialModule,
  ],
  exports: [],
  // providers: [AuthService, AuthGuard],
})
export class AccountModule { }
