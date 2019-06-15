import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-persontracking',
  templateUrl: './persontracking.component.html',
  styleUrls: ['./persontracking.component.scss']
})
export class PersontrackingComponent implements OnInit {
data:any;
publicIp:string  = "api.xcompass.ml";
status : boolean = false;
val:JSON;
personStatus : boolean = false;
spinner:boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.spinner);
  }
  addapp(form:NgForm){
    this.spinner = false;
    this.data = form.value;
    this.data.email_id = sessionStorage.getItem("email_id");
    // console.log(this.data);
    if(form.valid){
      this.http.post("http://"+this.publicIp+"/AppReg",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
          console.log(d);
          this.val=d as JSON; 
          if(this.val['status']){
            this.personStatus=true;
            this.spinner = true;
            setTimeout(() => {
              this.personStatus=false;
            }, 3000);
          
          }
        },
        (error)=>(console.log(error))
      );
  }
  }
 

}
