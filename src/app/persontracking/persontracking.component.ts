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
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  addapp(form:NgForm){
    this.data = form.value;
    this.data.email_id = sessionStorage.getItem("email_id");
    // console.log(this.data);
    if(form.valid){
      this.http.post("http://"+this.publicIp+"/AppReg",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
          console.log(d);
          this.val=d as JSON; 
        },
        (error)=>(console.log(error))
      );
  }
  }

}
