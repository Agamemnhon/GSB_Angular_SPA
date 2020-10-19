import { Component, OnInit } from '@angular/core';
import { Praticien } from '../models/praticien';
import { PraticienService } from '../services/praticien.service';

@Component({
  selector: 'app-praticiens',
  templateUrl: './praticiens.component.html'
})
export class PraticiensComponent implements OnInit {
  public praticiens: Praticien[];
  public title: String;
  public error: String;
  constructor(private praticienService: PraticienService) { }

  ngOnInit(): void {
    this.getPraticiens();
  }

  getPraticiens(): void {
    this.title = 'Liste des Praticiens';
    this.praticienService.getPraticiens().subscribe(
      (praticiens) => { this.praticiens = praticiens; },
      (error) => { this.error = error.message; }
    );
  }

}
