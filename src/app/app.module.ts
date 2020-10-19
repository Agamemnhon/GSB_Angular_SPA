import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { HomeComponent } from './home/home.component';
import { PraticienService } from './services/praticien.service';
import { HttpClientModule } from '@angular/common/http';
import { PraticiensComponent } from './praticiens/praticiens.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    PraticiensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService, PraticienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
