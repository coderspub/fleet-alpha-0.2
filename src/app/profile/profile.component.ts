import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data:any;
  publicIp:string  = "api.xcompass.ml";
  val:JSON;
  address:string;
  company_name : string;
  zipcode : string;
  country: string;
  phonenumber : string;
  
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.data = { "email_id" : sessionStorage.getItem("email_id")};
    this.http.post("http://"+this.publicIp+"/UserDetail",this.data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{ 
        this.val=d as JSON; 
        console.log(this.val);
        this.address = this.val['userdetail']['address'];
        this.company_name = this.val['userdetail']['company_name'];
        this.zipcode= this.val['userdetail']['zipcode'];
        this.country = this.val['userdetail']['country'];
        this.phonenumber = this.val['userdetail']['phonenumber'];
      },
      (error)=>(console.log(error))
    );
   
  }

}
