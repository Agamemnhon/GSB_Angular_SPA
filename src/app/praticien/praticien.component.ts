import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Praticien } from '../models/praticien';


@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html'
})
export class PraticienComponent implements OnInit {
  public praticien : Praticien;
  public praticiens: Praticien[];
  @Input() public nom_praticien : String;
  @Output() private onValidate= new EventEmitter();
  public title : String;
  public error: String;

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.praticien = new Praticien();
    this.title = "Recherche d'un praticien par Nom";
  }

  cancel(){
    this.router.navigate(['/home']);
  }

  validatePraticien(nom: String){
    this.nom_praticien = nom;
    this.onValidate.emit(this.nom_praticien);
  }

  onSubmit(){

  }


}
