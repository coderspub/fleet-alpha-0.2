import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggler:boolean =true;
  time = new Date();
  timer;
  loader:boolean = true;

  constructor(private router : Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.loader=false;
    }, 6000);
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  toggle(){
if(this.toggler ==true){
  document.getElementById("sidebar-wrapper").style.width = "250px";
  document.getElementById("page-content-wrapper").style.paddingLeft = "250px";
  this.toggler = false;
  console.log(this.toggler);
}
else{
  document.getElementById("sidebar-wrapper").style.width = "0px";
  document.getElementById("page-content-wrapper").style.paddingLeft = "0px";
  this.toggler =true;
  console.log(this.toggler);
}
  }
  sideNavCLose(){
    document.getElementById("sidebar-wrapper").style.width = "0px";
    document.getElementById("page-content-wrapper").style.paddingLeft = "0px";
  }
settings(){
  console.log("settings");
}
  signout(){
    console.log("signout");
    this.router.navigate(['/']);
  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
