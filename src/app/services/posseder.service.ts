import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Specialite } from '../models/specialite';
import { CommonService } from './common.service';
import { PraticienService } from './praticien.service';

@Injectable({
  providedIn: 'root'
})
export class PossederService {
  private gsbAPI: String = 'http://localhost/gsbNAPI/public/api/';
  private specialites: Specialite[];
  private spec: Specialite;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private commonService: CommonService
) { }

    getSpecialitesPraticien(id_praticien: number): Observable<any>{
      return this.httpClient.get(this.gsbAPI+'posseders/'+ id_praticien + '/'+ 0);
    }
    getLibSpec(id: number) {
        this.commonService.getSpecialites().subscribe(
          (specialites)=>{this.specialites =specialites;});
          this.spec = this.specialites[id];
          return this.spec;
    }
}
