import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FleetMapService {
data:any;
publicIp:string  = "api.xcompass.ml";
val:JSON;
  constructor(private http: HttpClient) { }
  retriveUserDetails(){
    this.data.email_id = localStorage.getItem("email_id");
    this.data.appid = localStorage.getItem("appid");
    
    this.http.post("http://"+this.publicIp+"/AppDetail",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        
        this.val=d as JSON; 
        if(this.val['status']){
          console.log(this.val);
          return this.val;
        }
   
      },
      (error)=>(console.log(error))
    );
}
}
