import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable, Observer, Subscription, fromEvent } from 'rxjs'
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  publicIp: string = "35.244.17.132:8080";
  email_id : string;
  status :JSON;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private router: Router,private http: HttpClient) { }

  signin(data:any){
    sessionStorage.setItem("email_id",data.email_id);
    localStorage.setItem("email_id",data.email_id);
    return this.http.post("http://" + this.publicIp + "/Authorize",data,this.httpOptions).pipe(tap(res=>{
    if(res['status']){
    localStorage.setItem("email_id",data.email_id);
    localStorage.setItem("token","xx.yy.zz");
  
      this.router.navigate(["/dashboard"]);
    
    }
    else{
      let data = { status: false , reason:"tampered token"}
      return data
    }
    console.log("res",res);
    }));
   
  }
  register(data:any){
     localStorage.setItem("email_id",data.email_id);
     return this.http.post("http://" + this.publicIp + "/SignUpOTP",data,this.httpOptions);
  }
  process(data:any){
    data["email_id"] =localStorage.getItem("email_id");
    return this.http.post("http://" + this.publicIp + "/VerifyOTP",data,this.httpOptions);
  }
  userRegister(data:any){
    data["email_id"] = localStorage.getItem("email_id");
    console.log(data);
    return this.http.post("http://" + this.publicIp + "/SignUp",data,this.httpOptions);
  }
  onPersonTrackingLoad(){
    let data = { "email_id": localStorage.getItem("email_id")};
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/AppList",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
    
  }
  editPersonTracking(data:any){
    data["email_id"] = localStorage.getItem("email_id");
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/AppDetail",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
    
  }
  alterPersonTracking(data:any){
    data["email_id"] = localStorage.getItem("email_id");
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/AppEdit",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
   
  }
  deletePersonTracking(data:any){
    data["email_id"] = localStorage.getItem("email_id");
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/AppRemove",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
    
  }
  addPersonTracking(data:any){
    data["email_id"] = localStorage.getItem("email_id");
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/AppReg",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
   
  }
  onProfileLoad():Observable<any>{
    let data = { "email_id": localStorage.getItem("email_id")};
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/UserDetail",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
  
 
         
  }
  getAppDetailsOnLoad(data){
    data["email_id"] = localStorage.getItem("email_id");
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/AppDetail",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
   
  }
  getAppData(data){
    data["email_id"] = localStorage.getItem("email_id");
    if(this.isLoggedIn()){
      return this.http.post("http://" + this.publicIp + "/Location",data,this.httpOptions);
    }
    else{
      let rest = { status : false}
      return Observable.create((res)=>{
        res.next(rest);
      });
    }
    
  }
  isLoggedIn(){
    if(localStorage.getItem("token")!=null){
      return true;
    }
   else{
    Swal.fire({
      title: 'Alert!',
      text: 'Tampered or broken token',
      type: 'error',
      confirmButtonText: 'Close'
    })
      this.router.navigate(["/"]);
    }
  }
  
}
