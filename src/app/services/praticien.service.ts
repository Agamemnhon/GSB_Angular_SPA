import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {
  private gsbAPI: String = 'http://localhost/gsbNAPI/public/api/';
  constructor(private httpClient: HttpClient) { }

  getPraticiens(): Observable<any> {
    return this.httpClient.get(this.gsbAPI + 'praticiens');
  }
}
