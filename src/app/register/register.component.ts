import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  publicIp:string  = "api.xcompass.ml";
  val:JSON;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  log(x){
    console.log(x);
  }
  register(form:NgForm){
    let data = form.value;
    if(form.valid){

    
    // data.push({"email_id":sessionStorage.getItem("email_id")});
    data.email_id = sessionStorage.getItem("email_id");
    console.log(data);
 
      this.http.post("http://"+this.publicIp+"/SignUp",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
          console.log(d);
          this.val=d as JSON;    
        },
        (error)=>(console.log(error))
      );
    }
    else{
      console.log("form not filled");
    }
   
  }

}
