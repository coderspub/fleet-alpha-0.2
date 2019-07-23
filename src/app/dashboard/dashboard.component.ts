import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
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
    }, 4000);
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

toggle(){
  $('#sidebar').toggleClass('active');
}
  sideNavCLose(){
    document.getElementById("sidebar-wrapper").style.width = "0px";
    document.getElementById("page-content-wrapper").style.paddingLeft = "0px";
  }

redirectToCalendar(){
  this.router.navigate(['/dashboard/calendar']);
}
  signout(){
  
    this.router.navigate(['/']);
    localStorage.clear();
    sessionStorage.clear();
  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
