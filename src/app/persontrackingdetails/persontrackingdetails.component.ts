import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
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
 
 
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    
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
              this. response  = { 'customerId' : sessionStorage.getItem("email_id"), 'appId' : this.appData}
            
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
   console.log(id);

  }
  delete(id){
    console.log(id);
 
   }
 

}
