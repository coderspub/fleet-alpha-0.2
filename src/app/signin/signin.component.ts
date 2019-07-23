import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { NgForm } from "@angular/forms";
import { HttpClient} from "@angular/common/http";
import { ServerService } from "../server.service";
import Swal from 'sweetalert2';
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  status: boolean = false;
  invalid: boolean = false;
  valid: boolean = false;
  data: any;
  forgotpassword: boolean = false;
  spinner: boolean = true;
  loggedInStatus : boolean =  false;
  constructor(private router: Router, private http: HttpClient, private server : ServerService) {}

  ngOnInit() {}
  
  signin(form: NgForm){
  if(form.valid){
        this.spinner = false;
    this.server.signin(form.value).subscribe((res:any)=>{
      if(res['status']){
      this.spinner = true;
      
   
    
      }
      else{
        this.spinner = true;
        Swal.fire({
                  title: 'Alert!',
                  text: 'Invalid Username or Password',
                  type: 'error',
                  confirmButtonText: 'Close'
                })
        console.log(res);
      }
    },error => { console.log(error);})
  }
 

  }
  signoutRedirect() {
    this.router.navigate(["/signup"]);
  }
  forgotpass() {
    console.log("forgot");
    try {
      if (this.data.email_id != "") {
        console.log("forgot");
        this.forgotpassword = true;
        setTimeout(() => {
          this.forgotpassword = false;
        }, 4000);
        console.log("sending email");
      } else {
        console.log("email blank");
      }
    } catch {
      console.log("error");
    }
  }
}
