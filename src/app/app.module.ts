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
import { CommonService } from './services/common.service';
import { PossederComponent } from './posseder/posseder.component';
import { PraticienComponent } from './praticien/praticien.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { PratListComponent } from './prat-list/prat-list.component';
import { PratBySpecComponent } from './prat-by-spec/prat-by-spec.component';
import { PratByNameComponent } from './prat-by-name/prat-by-name.component';
import { ErrorComponent } from './error/error.component';
import { PossederService } from './services/posseder.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    PraticiensComponent,
    PossederComponent,
    PraticienComponent,
    SpecialiteComponent,
    PratListComponent,
    PratBySpecComponent,
    PratByNameComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService, PraticienService, CommonService, PossederService],
  bootstrap: [AppComponent]
})
export class AppModule { }
