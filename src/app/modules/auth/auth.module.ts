import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagesModule} from 'primeng/messages';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    FormsModule,MessagesModule,
     ReactiveFormsModule, ToastrModule.forRoot(),
     HttpClientModule
  ]
})
export class AuthModule { }
