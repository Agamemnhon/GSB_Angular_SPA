import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PossederComponent } from './posseder/posseder.component';
import { PratByNameComponent } from './prat-by-name/prat-by-name.component';
import { PratBySpecComponent } from './prat-by-spec/prat-by-spec.component';
import { PraticiensComponent } from './praticiens/praticiens.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'getPraticiens', children: [
    { path: '', component: PraticiensComponent},
    { path: 'bySpec', component: PratBySpecComponent},
    { path: 'bySpec/:id_specialite', component: PraticiensComponent},
    { path: 'byName', component: PratByNameComponent },
    { path: 'byName/:nom_praticien', component: PraticiensComponent}
    ]
  },
  { path: 'detailPraticien/:id_praticien', component: PossederComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
