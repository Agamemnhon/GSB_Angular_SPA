import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private gsbNAPISrvUrl = 'http://localhost/gsbNAPI/public/api/';
  constructor(private httpClient: HttpClient) { }

  getSpecialites(): Observable<any> {
    return this.httpClient.get(this.gsbNAPISrvUrl + 'specialites');
  }
}
