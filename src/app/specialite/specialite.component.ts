import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Specialite } from '../models/specialite';
import { CommonService } from '../services/common.service';
import { PraticienService } from '../services/praticien.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html'
})
export class SpecialiteComponent implements OnInit {
  public title: String;
  public error: String;
  public specialite: Specialite;
  public specialites: Specialite[];
  @Input() public id_specialite: number;
  @Output() private onChoose= new EventEmitter();

  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSpecialites();
  }
  getSpecialites():void {
    this.specialite=new Specialite();
    this.commonService.getSpecialites().subscribe(
      (specialites) => { this.specialites = specialites; },
      (error) => { this.error = error.message; }
    );
  }

  validateSpecialite(id_specialite: number){
    this.router.navigate(['/getPratBySpec/' + id_specialite]);
  }

  /**
   * Gestionnaire d'event_ On récupère l'id de la specialite et onChoose émet
   * un event avec cet id en paramètre
   * @param value l'id de la spec sélectionnée au format string
   */
  onChange(value: String) {
    this.id_specialite =+value;
    this.onChoose.emit(this.id_specialite);
  }



}
