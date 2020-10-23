import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Praticien } from '../models/praticien';
import { PraticienService } from '../services/praticien.service';

@Component({
  selector: 'app-praticiens',
  templateUrl: './praticiens.component.html'
})
export class PraticiensComponent implements OnInit {
  public praticiens: Praticien[];
  public pratTableTemp: Praticien[];
  public title: String;
  public error: String;
  public id_specialite : number;
  public nom_praticien: String;

  constructor(
    private praticienService: PraticienService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  /**
   * A 'initialisation du composant, on essaye de récupérer un paramêtre
   * dans le queryString
   * si on a un parametre c'est qu'on vient du PratBySpecComponent et qu'on a choisi
   * une spécialité dans la liste déroulante, sinon c'est qu'on a demandé la liste
   * de tous les employés dans le menu
   */
  ngOnInit(): void {
    this.title= 'Liste des Praticiens';
    this.id_specialite=  +this.activatedRoute.snapshot.paramMap.get('id_specialite');
    this.nom_praticien = this.activatedRoute.snapshot.paramMap.get('nom_praticien');
    if(this.id_specialite>0){
      this.getPratBySpec(this.id_specialite);
    } else {
        if(this.nom_praticien != null) {
          this.getPratByName(this.nom_praticien)
        } else {
          this.getPraticiens();
        }
      }
  }
  getPraticiens(): void {
    this.praticienService.getPraticiens().subscribe(
      (praticiens) => { this.praticiens = praticiens; },
      (error) => { this.error = error.message; }
    );
  }

  detail(praticien_id: number) {
    this.router.navigate(['/detailPraticien/' + praticien_id]);
  }

  getPratBySpec(id_specialite){
    this.praticienService.getPratBySpec(id_specialite).subscribe(
      (praticiens) => {
        this.praticiens = praticiens;
        if (this.praticiens == []){
          this.router.navigate(['/byName', this.error = 'Il n\'existe aucun praticien ayant cette spécialité']);
      } },
      (error) => { this.error = error.message; }
    )
  }

  getPratByName(nom_praticien: String){
    this.praticienService.getPratByName(nom_praticien).subscribe(
      (praticiens) => { this.praticiens = praticiens;},
      (error) => { this.error = error.message; }
    );



  }

}
