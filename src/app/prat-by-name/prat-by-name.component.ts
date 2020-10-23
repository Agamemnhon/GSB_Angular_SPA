import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Praticien } from '../models/praticien';

@Component({
  selector: 'app-prat-by-name',
  templateUrl: './prat-by-name.component.html'
})
export class PratByNameComponent implements OnInit {
  public title: String;
  public nom_praticien: String;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.title = "Recherche d'un praticien par nom";
  }
  nameValidate(nom_praticien: String){
    this.nom_praticien = nom_praticien;
    this.router.navigate(['/getPraticiens/byName/' + nom_praticien]);

  }

}
