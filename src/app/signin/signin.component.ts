import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signin(){
   this.router.navigate(['/dashboard']);
  }
  signoutRedirect(){
    this.router.navigate(['/signup']);
   }
}
