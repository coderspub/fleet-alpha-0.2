import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
active:boolean;
deactive:boolean;
  constructor() { }

  ngOnInit() {
  this.checkstatus();
  }
  // checkStatus(){
    
  //   if(sessionStorage.getItem("state") === "true"){
  //     this.active = true;
  //     this.deactive = false;
  //   }
  //   if(sessionStorage.getItem("state") === "false"){
  //     this.active = false;
  //     this.deactive = true;
  //   }
  //   console.log("active",this.active);
  //   console.log("deactive",this.deactive);
  // }
  checkstatus(){
    if(sessionStorage.getItem("active")==="true" && sessionStorage.getItem("deactive")==="false"){
      this.deactive = false;
      this.active = true;
    }
    if(sessionStorage.getItem("active")==="false" && sessionStorage.getItem("deactive")==="true"){
      this.deactive = true;
      this.active = false;
    }
  }
  activate(){
    sessionStorage.setItem("active","true");
    sessionStorage.setItem("deactive","false");
    this.checkstatus();

  }
  deactivate(){
    sessionStorage.setItem("active","false");
    sessionStorage.setItem("deactive","true");
    this.checkstatus();

  }

}
