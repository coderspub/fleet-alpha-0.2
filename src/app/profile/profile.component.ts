import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from "../server.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  address:string;
  company_name : string;
  zipcode : string;
  country: string;
  phonenumber : string;
  email_id : string;
  pageloader:boolean=true;
  pagedata:boolean = false;
  constructor(private http: HttpClient,private server : ServerService) { }
 
  ngOnInit() {

    this.server.onProfileLoad().subscribe((res)=>{
      // console.log(res);
        this.pageloader = false;
        this.pagedata = true;

      
      if(res['status']){
        this.address = res['userdetail']['address'];
        this.company_name = res['userdetail']['company_name'];
        this.zipcode= res['userdetail']['zipcode'];
        this.country = res['userdetail']['country'];
        this.phonenumber = res['userdetail']['phonenumber'];
        this.email_id = localStorage.getItem("email_id");
       
      }
    },(error)=>{
      console.log(error);
    });

   }




}
