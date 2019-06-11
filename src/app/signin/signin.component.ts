import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  publicIp:string  = "api.xcompass.ml";
  status : boolean = false;
  val:JSON;
  invalid : boolean = false;
  valid:boolean = false;
   data:any;
   forgotpassword:boolean=false;
  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit() {
  }
  signin(form:NgForm){
    this.data = form.value;
    console.log(form.value);
    sessionStorage.setItem("email_id",form.value.email_id);
    if(form.valid || form.value.email_id!='' || form.value.passwd!=''){
    this.http.post("http://"+this.publicIp+"/Authorize",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        console.log(d);
        this.val=d as JSON; 
        this.status =this.val['status'];
        
          if(this.status == true){
          this.router.navigate(['/dashboard']);
          setTimeout(() => {
            this.valid = false;
          }, 1000);
        }
        else{
            this.invalid = true;
            setTimeout(() => {
              this.invalid = false;
            }, 4000);
          }
      },
      (error)=>(console.log(error))
    );
    }
   
  //  this.router.navigate(['/dashboard']);
  // console.log(form.value);
  // console.log(this.status);
  // if(this.status == true){
  //   this.router.navigate(['/dashboard']);
  //   setTimeout(() => {
  //     this.valid = false;
  //   }, 1000);
  // }
  // else{
  //   this.invalid = true;
  //     setTimeout(() => {
  //       this.invalid = false;
  //     }, 2000);
  // }

  }
  signoutRedirect(){
    this.router.navigate(['/signup']);
   }
   forgotpass(){
    console.log("forgot");
    try{
      if(this.data.email_id!=''){
        console.log("forgot");
        this.forgotpassword  = true;
        setTimeout(() => {
          this.forgotpassword = false;
        }, 4000);
        console.log("sending email")
       }
       else{
         console.log("email blank")
       }
       
    }
   catch{
     console.log("error")
   }
     
     
   
     
   }
}
