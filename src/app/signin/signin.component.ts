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
  publicIp:string  = "35.244.17.132:5000";
  status : boolean = false;
  val:JSON;
  invalid : boolean = false;
  valid:boolean = false;
  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit() {
  }
  signin(form:NgForm){
    const data = form.value;
    this.http.post("http://"+this.publicIp+"/Authorize",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
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
            }, 2000);
          }
      },
      (error)=>(console.log(error))
    );
  //  this.router.navigate(['/dashboard']);
  // console.log(form.value);
  console.log(this.status);
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
}
