import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
device1(){
  this.router.navigate(['/maps']);
  localStorage.setItem('c_id','BS0001');
  localStorage.setItem('a_id','S001');
}
device2(){
  this.router.navigate(['/maps']);
  localStorage.setItem('c_id','BS0001');
  localStorage.setItem('a_id','S002');
}
signout(){
  this.router.navigate(['/']);
}

}
