import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialite } from '../models/specialite';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-prat-by-spec',
  templateUrl: './prat-by-spec.component.html'
})
export class PratBySpecComponent implements OnInit {
  public title: String;
  public id_specialite: number;
  public specialite: Specialite;
  public specialites : Specialite[];
  public error: String;
  constructor(
    private router:Router,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.title="Choix d'une spécialité";
    this.getSpecialites();
  }
  specSelected(id_specialite: number):void {
    this.id_specialite = id_specialite;
    this.router.navigate(['/getPraticiens/bySpec/' + id_specialite]);
  }
  getSpecialites():void {
    this.specialite=new Specialite();
    this.commonService.getSpecialites().subscribe(
      (specialites) => { this.specialites = specialites;
      console.log(this.specialites) },
      (error) => { this.error = error.message; }
    );
  }



}
