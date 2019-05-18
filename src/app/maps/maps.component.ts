import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import { FleetMapService } from '../fleet-map.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
   deviceId:string;
   map: any;
   a_id:string;
   c_id:string;
   val:JSON;
   lat:string;
   long:string;
   publicIp:string  = "35.244.17.132:5000";
   showSpinner:boolean=true;
   @ViewChild('map') mapContainer: ElementRef;
 
  constructor(private fleetMap:FleetMapService,private http: HttpClient,private spinner: NgxSpinnerService,private router : Router) { 

  }

  ngOnInit() {
    this.a_id = this.fleetMap.retriveAppId();
    this.c_id=this.fleetMap.retriveCustomerId();
  
    this.loadmap();
    // this.getdata();
  }
  getdata(){
    const data = {
      "c_id":this.c_id,
      "a_id":this.a_id
    }
  
    this.http.post("http://"+this.publicIp+"/location",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
      d=>{
        this.val=d as JSON;
        this.lat = this.val['latitude'];
        this.long = this.val['longitude'];
      },
      (error)=>(console.log(error))
    );
    if(this.lat != undefined || this.long != undefined){
    this.addmarker();
    }
    console.log(this.lat);
    console.log(this.long);
    console.log(this.a_id);
    console.log(this.c_id);
    // this.spinner.hide();

    // this.http.post("http://"+this.publicIp+"/location",data,{headers:new HttpHeaders().set("Content-type", 'application/json')}).subscribe(
    //   d=>{
    //     this.val=d as JSON;
    //     this.lat = this.val['latitude'];
    //     this.long = this.val['longitude'];
    //   },
    // )
    // this.showSpinner=false;
    // if(this.lat!=null || this.long!=null){
    // this.addmarker();
    // }
    console.log(this.lat);
    console.log(this.long);
    console.log(this.a_id);
    console.log(this.c_id);
  }
  loadmap() {
 
    this.map = leaflet.map("map").setView([13.0827,80.2707],13);
 
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.sharath.com'
    
    }).addTo(this.map);
    
  }
  addmarker(){
    console.log("adding marker");
    console.log(this.val);
    leaflet.marker([this.lat,this.long]).addTo(this.map);
    this.map.panTo([this.lat,this.long]);
  }
  signout(){
    console.log("signout");
    this.router.navigate(['/']);
  }

}
