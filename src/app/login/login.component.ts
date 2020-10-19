import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public title: String;
  public error: String;
  public user;

  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
  }
  public login(): void{
    this.sharedService.isConnected = true;
    this.router.navigate(['/home']);
  }

}
