import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import leaflet from "leaflet";
import "leaflet-routing-machine";
import { FleetMapService } from "../fleet-map.service";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { ServerService } from "../server.service";
@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"]
})
export class MapsComponent implements OnInit, OnDestroy {
  deviceId: string;
  data: any;
  map: any;
  a_id: string;
  c_id: string;
  val: JSON;
  theMarker: any;
  refresher: any;
  lat: string = "13.0827";
  long: string = "80.2707";
  mylat: number = 13.0827;
  showSpinner: boolean = true;
  personName: string;
  designation: string;
  speed:string;
  appTime : string;
  @ViewChild("map") mapContainer: ElementRef;

  constructor(
    private fleetMap: FleetMapService,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private router: Router,
    private server : ServerService
  ) {
    this.refresher = setInterval(() => {
      this.getdata();
    }, 5000);
  }

  ngOnInit() {
 this.getAppDetailsOnLoad();
  this.loadmap();
    // this.getdata();
  }
  getAppDetailsOnLoad(){
    let data = { "appid" : sessionStorage.getItem("appId")};
    this.server.getAppDetailsOnLoad(data).subscribe((res)=>{
      if(res['status']){
        this.personName = res["appdetail"]['employee_name'];
        this.designation = res["appdetail"]['designation'];
      }
    },(error)=>{
      console.log(error);
    });

  }
  
  ngOnDestroy() {
    clearInterval(this.refresher);
  }
  getdata() {
    let data = {appid: sessionStorage.getItem("appId")};
    this.server.getAppData(data).subscribe((res)=>{
      if(res['status']){
        this.long = res['trackingdetail']['location']['coordinates'][0];
        this.lat = res['trackingdetail']['location']['coordinates'][1]
       this.speed = res['trackingdetail']['speed'];
       this.appTime = res['trackingdetail']['datetime'];
       if (this.lat != undefined || this.long != undefined) {
        this.addmarker();
       }
      }
      
    },(error)=>{
      console.log(error);
    });
  }

  loadmap() {
    this.map = leaflet.map("map").setView([13.0827, 80.2707], 17);

    leaflet
      .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attributions: "www.sharath.com"
      })
      .addTo(this.map);
    this.theMarker = leaflet.marker([this.lat, this.long]).addTo(this.map);
  }
  addmarker() {

    this.theMarker.remove();
    this.theMarker = leaflet.marker([this.lat, this.long]).addTo(this.map);
    this.map.panTo([this.lat, this.long]);
  }
  signout() {
    console.log("signout");
    this.router.navigate(["/"]);
  }
  showRoute() {
    leaflet.Routing.control({
      waypoints: [
        leaflet.latLng(13.05, 80.2121),
        leaflet.latLng(13.1148, 80.2872)
      ]
    }).addTo(this.map);
  }
}
