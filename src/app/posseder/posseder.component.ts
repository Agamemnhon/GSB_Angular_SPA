import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posseder } from '../models/posseder';
import { Praticien } from '../models/praticien';
import { Specialite } from '../models/specialite';
import { CommonService } from '../services/common.service';
import { PossederService } from '../services/posseder.service';
import { PraticienService } from '../services/praticien.service';

@Component({
  selector: 'app-posseder',
  templateUrl: './posseder.component.html'
})
export class PossederComponent implements OnInit {
  public praticien: Praticien;
  public specialite: Specialite;
  public specialites: Specialite[];
  public posseders: Posseder[];
  public id_praticien: number;
  public error: String;
  public titleForm: String;
  public id_specialite: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private possederService: PossederService,
    private praticienService: PraticienService,
    private commonService: CommonService
   ) { }

  ngOnInit(): void {
    this.id_praticien =  +this.activatedRoute.snapshot.paramMap.get('id_praticien');
    this.getPraticien(this.id_praticien);
    this.getSpecialitesPraticien(this.id_praticien);
    this.getSpecialites();
  }

  getPraticien(id_praticien: number){
    this.praticienService.getPraticien(id_praticien).subscribe(
      (praticien) => { this.praticien = praticien;},
      (error) => { this.error = error.message;}
    )
  }

  getSpecialitesPraticien(id: number){
    this.possederService.getSpecialitesPraticien(id).subscribe(
      (posseders) => {this.posseders = posseders;},
      (error) => { this.error = error.message;}

    );
  }
  detail(ip_p: number, ip_s: number) {

  }
  delete(ip_p: number, ip_s: number){}

  getSpecialites() {
    this.commonService.getSpecialites().subscribe(
      (specialites) => { this.specialites = specialites;},
      (error) => { this.error = error.message}
    );
  }
  getLibSpec(id: number){
    this.specialite = new Specialite();
    this.specialite = this.specialites[id-1];
    console.log(this.specialite);
    return this.specialite;
  }
}



