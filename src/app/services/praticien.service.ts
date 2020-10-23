import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {
  private gsbAPI: String = 'http://localhost/gsbNAPI/public/api/';
  //private remember_token = this.sharedService.user.remember_token;
  //public headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.remember_token });

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService


  ) { }

  getPraticiens(): Observable<any> {
    return this.httpClient.get(this.gsbAPI+'praticiens');
  }

  getPraticien(id: number): Observable<any> {
    return this.httpClient.get(this.gsbAPI + 'praticien/' + id);
  }
  getPratBySpec(id_specialite: number): Observable<any> {
    return this.httpClient.get(this.gsbAPI+ 'praticiens/specialite/'+id_specialite);
  }
  /**
   * Fonction qui récupère les praticiens dont le nom est en paramètre
   * @return un observable : listes de praticien(s)
   */
  getPratByName(nom_praticien: String): Observable<any> {
    return this.httpClient.get(this.gsbAPI+ 'praticiens/'+ nom_praticien);
  }


}
