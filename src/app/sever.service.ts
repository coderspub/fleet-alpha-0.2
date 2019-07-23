import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SeverService {
  publicIp: string = "35.244.17.132:8080";
  email_id : string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private router:Router,private http: HttpClient) { }
  // sigin(formData){
  //   let data = formData;
  //   let val:JSON;
  //   var valid: boolean=false;
  //   this.email_id = data.email_id;
  //   console.log("in sign")
  //   console.log(data.email_id);
  //   this.http.post("http://"+this.publicIp+"/Authorize",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
  //     d=>{
  //       console.log(d);
  //         val=d as JSON; 
  //         return true
  //     },
  //     (error)=>(console.log(error))
  //   );
  //   console.log(val);
  //   // if(val['status']){
  //   //   return true
  //   // }
  
  // }
  // getEmail(){
  //   console.log("get email");
  //   console.log(this.email_id);

  // }

  signin(data:any){
    console.log(data);
    this.http.post("http://" + this.publicIp + "/Authorize",data, {headers: new HttpHeaders().set("Content-type", "application/json")}).subscribe( res =>{
      console.log(res);
    },error=> console.log(error));

  }
 
 
}
