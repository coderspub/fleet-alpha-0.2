import { Component, OnInit} from '@angular/core';
import { ServerService } from "../server.service";
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-persontrackingdetails',
  templateUrl: './persontrackingdetails.component.html',
  styleUrls: ['./persontrackingdetails.component.scss']
})
export class PersontrackingdetailsComponent implements OnInit {
  data:any;
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
personStatus : boolean = false;
spinner:boolean = true;
  constructor(private http: HttpClient,private router : Router,private server : ServerService) { 

  }

  ngOnInit() {
  this.onPersonTrackingLoad();
  }
  onPersonTrackingLoad(){
    this.server.onPersonTrackingLoad().subscribe((res)=>{
      if(res['status']){
        this.appDetails = [];
        this.qrcode =[];

        let i ;
        for (i in res['applist']){

          this.appDetails.push(res['applist'][i]);
          let details =JSON.stringify({ "customerId" : sessionStorage.getItem("email_id"),"appId":res['applist'][i]['appid']});
          this.qrcode.push(details);
        }
      }
    },(error)=>{
      console.log(error);
    },()=>this.deviceCount())
  }
  
  
  deviceCount(){

    if(this.qrcode.length != 0){
      this.nodevice = false;
      this.hidetable.val = true;
    }
    else{
      this.nodevice = true;
      this.hidetable.val = false;
    }
  
 
  }
  edit(id){
    let detail =JSON.parse(id);
    sessionStorage.setItem("appid" ,  detail['appId']);
    let data = { "appid" : sessionStorage.getItem("appId")};
    this.server.getAppDetailsOnLoad(data).subscribe((res)=>{
      if(res['status']){
        this.name = res['appdetail']['employee_name'];
        this.phone= res['appdetail']['phonenumber'];
        this.desig = res['appdetail']['designation'];
        this.app = res['appdetail']['appid'];
 
      }

    },(error)=>{
      console.log(error);
    })
  }
  alter(form:NgForm){
   let  data = form.value;
   data['appid'] = sessionStorage.getItem("appid");
    this.server.alterPersonTracking(data).subscribe((res)=>{
      if(res['status']){
        this.onPersonTrackingLoad();
        $('#editModal').modal('hide')
      }

    },(error)=>{
      console.log(error);
    })

  }
  delete(id){
    let detail =JSON.parse(id);
    sessionStorage.setItem("appid" ,  detail['appId']);
   }
  remove(){
    const data = {"appid" : sessionStorage.getItem("appid")};
    console.log(data);
    this.server.deletePersonTracking(data).subscribe((res)=>{
      if(res['status']){
        $('#deleteModal').modal('hide')
        this.onPersonTrackingLoad();
        }

    },(error)=>{
      console.log(error);
    })
  }

  track(id){
    this.mapApp =JSON.parse(id);
     sessionStorage.setItem("appId",this.mapApp['appId']);
    this.router.navigate(['dashboard/maps']);
  }
  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 5000);
  // }
 
  addapp(form:NgForm){
    if(form.valid){
      this.server.addPersonTracking(form.value).subscribe((res)=>{
        if(res['status']){
          this.onPersonTrackingLoad();
          setTimeout(() => {
            this.personStatus=false;
            $("#exampleModal").modal("hide");
          }, 3000);
        }
      },(error)=>{
        console.log(error);
      });
    }

  }

}
