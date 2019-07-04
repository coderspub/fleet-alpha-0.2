import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-persontrackingnav',
  templateUrl: './persontrackingnav.component.html',
  styleUrls: ['./persontrackingnav.component.scss']
})
export class PersontrackingnavComponent implements OnInit {
  
  data:any;
  publicIp:string  = "api.xcompass.ml";
  status : boolean = false;
  val:JSON;
  personStatus : boolean = false;
  spinner:boolean = true;
  appDetails: any[];



  response:any;
 
  appId:any;
  appIds:any;
  appData:any;
  appInfo :any;
 name : string;
 emp_name:string;
 desig:string;
 phone:string;
 app:string;
 deleteapp:any;
 mapApp:any;
loader:boolean = true;
qrcode:any;
nodevice:boolean =false;
hidetable ={ "val" : null };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  addapp(form:NgForm){
    this.spinner = false;
    this.data = form.value;
    this.data.email_id = sessionStorage.getItem("email_id");
    // console.log(this.data);
    if(form.valid){
      this.http.post("http://"+this.publicIp+"/AppReg",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
          // console.log(d);
          this.val=d as JSON; 
          if(this.val['status']){
            
            this.personStatus=true;
            this.spinner = true;
            this.firsthit();
            setTimeout(() => {
              this.personStatus=false;
              $("#exampleModal").modal("hide");
            }, 3000);
            
          }
        },
        (error)=>(console.log(error))
      );
  }
  }
  firsthit(){
   
    this.data = {"email_id": sessionStorage.getItem("email_id")};
  
    this.http.post("http://"+this.publicIp+"/AppList",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
        d=>{
      
          this.val=d as JSON; 
          console.log(this.val);
          if(this.val['status'])
          {
      
            // this.spinner.hide();
            // let i;
            // this.appDetails =[];
            // this.appId=[];
 
            // for(i in  this.val['applist']){
            //   this.appData = this.val['applist'][i]['appid'];
            //   this. response  = { 'email_id' : sessionStorage.getItem("email_id"), 'appid' : this.appData}
            
            //   this.appInfo= JSON.stringify(this.response);
            //   this.appId.push(this.appInfo);
            //   this.appDetails.push(this.val['applist'][i].slice(0,3))
            
            // }
            this.appDetails = [];
            this.qrcode =[];
            // console.log(this.val['applist']);
            let i ;
            for (i in this.val['applist']){
              // console.log(this.val['applist'][i]);
              this.appDetails.push(this.val['applist'][i]);
              let details =JSON.stringify({ "customerId" : sessionStorage.getItem("email_id"),"appId":this.val['applist'][i]['appid']});
              this.qrcode.push(details);
            }
          
            // console.log(this.appDetails);
            // console.log(this.qrcode);
          
          }
        },
        
        (error)=>(console.log(error)),
        (()=>this.deviceCount())
      );
     

  }
  deviceCount(){
    console.log(this.qrcode.length)
    if(this.qrcode.length != 0){
      this.nodevice = false;
      this.hidetable.val = true;
    }
    else{
      this.nodevice = true;
      this.hidetable.val = false;
    }
  
    console.log("nodevice", this.nodevice);
  }
}
