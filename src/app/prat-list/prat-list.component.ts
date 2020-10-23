import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Praticien } from '../models/praticien';

@Component({
  selector: 'app-prat-list',
  templateUrl: './prat-list.component.html'
})
export class PratListComponent implements OnInit {
  public title: String;
  @Input() public praticiens: Praticien[];
  public error: String;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  detail(id_praticien: number) {
    this.router.navigate(['/detailPraticien/'+ id_praticien]);
  }


}
