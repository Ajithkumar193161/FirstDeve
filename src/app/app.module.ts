import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { ListModule } from './modules/list/list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import { HttpClientModule } from  '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ListModule,
    BrowserAnimationsModule,
    MessagesModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
