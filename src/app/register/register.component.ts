import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  publicIp:string  = "api.xcompass.ml";
  val:JSON;
  status:boolean = false;
  loader:boolean = true;
  spinner:boolean = true;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
  }
  log(x){
    console.log(x);
  }
  register(form:NgForm){
    let data = form.value;
    this.spinner = false;
    if(form.valid){

    
    // data.push({"email_id":sessionStorage.getItem("email_id")});
    data.email_id = sessionStorage.getItem("email_id");
    console.log(data);
 
      this.http.post("http://"+this.publicIp+"/SignUp",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
          console.log(d);
          this.val=d as JSON; 
          this.spinner = true; 
          if(this.val['status']){
            setTimeout(() => {
              this.loader=false;
            }, 1000);
            this.router.navigate(['/signin']);
          }  
        },
        (error)=>(console.log(error))
      );
    }
    else{
      console.log("form not filled");
    }
   
  }

}
