import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-persontrackingdetails',
  templateUrl: './persontrackingdetails.component.html',
  styleUrls: ['./persontrackingdetails.component.scss']
})
export class PersontrackingdetailsComponent implements OnInit {
  response:any;
  data:any;
  publicIp:string  = "api.xcompass.ml";
  val:JSON;
  appDetails:any;
  appId:any;
  appIds:any;
  appData:any;
  appInfo :any;
 name : string;
 emp_name:string;
 desig:string;
 phone:string;
 app:string;
 deleteapp:string = "";
 mapApp:any;

  constructor(private http: HttpClient,private router : Router) { 

  }

  ngOnInit() {
 
    this.firsthit();
  
  }
  firsthit(){
    this.data = {"email_id": sessionStorage.getItem("email_id")};
  
    this.http.post("http://"+this.publicIp+"/AppList",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
      
          this.val=d as JSON; 
          if(this.val['status'])
          {
      
        
            let i;
            this.appDetails =[];
            this.appId=[];
 
            for(i in  this.val['applist']){
              this.appData = this.val['applist'][i][3];
              this. response  = { 'email_id' : sessionStorage.getItem("email_id"), 'appid' : this.appData}
            
              this.appInfo= JSON.stringify(this.response);
              this.appId.push(this.appInfo);
              this.appDetails.push(this.val['applist'][i].slice(0,3))
            
            }
            

            
          }
        },
        (error)=>(console.log(error))
      );

  }
  edit(id){

   const data =JSON.parse(id);
 

   this.http.post("http://"+this.publicIp+"/AppDetail",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        
        this.val=d as JSON; 
        if(this.val['status']){
          this.name = this.val['appdetail'][0];
          this.phone= this.val['appdetail'][1];
          this.desig = this.val['appdetail'][2];
          this.app = this.val['appdetail'][3];
        }
   
      },
      (error)=>(console.log(error))
    );
  
  }
  delete(id){
    this.deleteapp =JSON.parse(id);
    console.log(this.deleteapp);
   
   }
   remove(){
     const data = this.deleteapp;
    this.http.post("http://"+this.publicIp+"/AppRemove",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        
        this.val=d as JSON; 
        console.log(this.val['status']);
        if(this.val['status']){
        console.log("removed");
        this.firsthit();
        $('#deleteModal').modal('hide')
        }
   
      },
      (error)=>(console.log(error))
    );
   }
   alter(form:NgForm){
     this.data = form.value;
  
     this.data.email_id=sessionStorage.getItem("email_id");
     this.data.appid =this.app;
     console.log(this.data);
     this.http.post("http://"+this.publicIp+"/AppEdit",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        
        this.val=d as JSON; 
        if(this.val['status']){
          this.firsthit();
          $('#editModal').modal('hide')
        }
   
      },
      (error)=>(console.log(error))
    );
  
  }
  track(id){
    this.mapApp =JSON.parse(id);
    sessionStorage.setItem("appid",this.mapApp['appid']);
    console.log(this.mapApp);
    this.router.navigate(['dashboard/maps']);
  }
 

}
