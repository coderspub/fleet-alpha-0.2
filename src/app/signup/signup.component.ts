import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
declare var $: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showEmailAlert : boolean = false;
  invalidOTP : boolean = false;
  emptyOTP : boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signInReroute(){
    this.router.navigate(['/signin']);
  }
  process(form:NgForm){
    
    console.log(form.value); //get full object
    console.log(form.value.otp); //get only email value
    if(form.value.otp == 1234){
      $('#exampleModal').modal('hide')
      this.router.navigate(['/register']);
    }
    else if(form.value.otp == '' || undefined || null){
      this.emptyOTP = true;
      setTimeout(() => {
        this.emptyOTP = false;
      }, 1000);
    }
    else{
      this.invalidOTP = true;
      setTimeout(() => {
        this.invalidOTP = false;
      }, 1000);
    }
    
  }
 

  register(form:NgForm){
    
    sessionStorage.setItem("email",form.value.email);
    sessionStorage.setItem("passwrd",form.value.passwrd);
  }
  resendEmail(){
    console.log("sending email");
    this.showEmailAlert = true;
    setTimeout(() => {
      this.showEmailAlert = false;
    }, 1000);
  }

}
