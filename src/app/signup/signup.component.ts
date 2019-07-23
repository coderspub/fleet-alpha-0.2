import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ServerService } from "../server.service";
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  showEmailAlert: boolean = false;
  invalidOTP: boolean = false;
  emptyOTP: boolean = false;
  registered: boolean = false;
  spinner: boolean = true;
  constructor(private router: Router, private http: HttpClient,private server : ServerService) {}

  ngOnInit() {}
  signInReroute() {
    this.router.navigate(["/signin"]);
  }
  register(form: NgForm) {
    this.spinner = false;
    const data = form.value;
    this.server.register(data).subscribe((res : any)=>{
            if (res["status"]) {
            $("#exampleModal").modal("show");
            this.spinner = true;
          } else {
            this.spinner = true;
            Swal.fire({
              title: 'Alert!',
              text: 'User Already Registered',
              type: 'error',
              confirmButtonText: 'Close'
            })
          }
    
},error => { console.log(error)});
  
  }
  process(form: NgForm) {
    if(form.valid){
      this.server.process(form.value).subscribe((res:any)=>{
        if(res['status']){
                  $("#exampleModal").modal("hide");
               this.router.navigate(["/register"]); 
        }
        else{
          console.log(res);
                    this.invalidOTP = true;
               setTimeout(() => {
                 this.invalidOTP = false;
               }, 1000);
        }
       },error => {console.log(error);})
    }
 
  }
  resendEmail() {
    console.log("sending email");
    this.showEmailAlert = true;
    setTimeout(() => {
      this.showEmailAlert = false;
    }, 1000);
  }
}
