import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
 deleteapp:any;
 mapApp:any;
loader:boolean = true;
qrcode:any;
nodevice:boolean =false;
hidetable ={ "val" : null };
  constructor(private http: HttpClient,private router : Router,private spinner: NgxSpinnerService) { 

  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.loader=false;
    // }, 4000);
    this.spinner.show();
    console.log("show")
  this.firsthit();
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
  edit(id){

   let detail =JSON.parse(id);
   let data = { "email_id" : sessionStorage.getItem("email_id"),"appid" : detail['appId']};
   this.http.post("http://"+this.publicIp+"/AppDetail",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        
        this.val=d as JSON; 
        if(this.val['status']){
          this.name = this.val['appdetail']['employee_name'];
          this.phone= this.val['appdetail']['phonenumber'];
          this.desig = this.val['appdetail']['designation'];
          this.app = this.val['appdetail']['appid'];
        }
   
      },
      (error)=>(console.log(error))
    );
  
  }
  delete(id){
    let detail =JSON.parse(id);
    let data = { "email_id" : sessionStorage.getItem("email_id"),"appid" : detail['appId']};
    console.log(data);
   this.deleteapp = data;
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
        this.firsthit();
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
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
 

}
