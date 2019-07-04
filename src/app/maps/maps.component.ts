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
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
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
  publicIp: string = "api.xcompass.ml";
  showSpinner: boolean = true;
  personName: string;
  designation: string;
  @ViewChild("map") mapContainer: ElementRef;

  constructor(
    private fleetMap: FleetMapService,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.refresher = setInterval(() => {
      this.addmarker();
    }, 5000);
  }

  ngOnInit() {
    // this.a_id = this.fleetMap.retriveAppId();
    // this.c_id=this.fleetMap.retriveCustomerId();
    // this.fleetMap.retriveUserDetails();

    this.firsthit();

    this.loadmap();
    // this.getdata();
  }
  firsthit() {
    this.data = {
      email_id: sessionStorage.getItem("email_id"),
      appid: sessionStorage.getItem("appid")
    };
    this.http
      .post("http://" + this.publicIp + "/AppDetail", this.data, {
        headers: new HttpHeaders().set("Content-type", "application/json")
      })
      .subscribe(
        d => {
          this.val = d as JSON;
          if (this.val["status"]) {
            console.log(this.val);
            this.personName = this.val["appdetail"][0];
            this.designation = this.val["appdetail"][2];
          }
        },
        error => console.log(error)
      );
  }
  ngOnDestroy() {
    clearInterval(this.refresher);
  }
  getdata() {
    const data = {
      c_id: this.c_id,
      a_id: this.a_id
    };

    this.http
      .post("http://" + this.publicIp + "/location", data, {
        headers: new HttpHeaders().set("Content-type", "application/json")
      })
      .subscribe(
        d => {
          this.val = d as JSON;
          this.lat = this.val["latitude"];
          this.long = this.val["longitude"];
        },
        error => console.log(error)
      );
    if (this.lat != undefined || this.long != undefined) {
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
    this.map = leaflet.map("map").setView([13.0827, 80.2707], 13);

    leaflet
      .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attributions: "www.sharath.com"
      })
      .addTo(this.map);
    this.theMarker = leaflet.marker([this.lat, this.long]).addTo(this.map);
  }
  addmarker() {
    // console.log("adding marker");
    // console.log(this.val);
    // leaflet.marker([this.lat,this.long]).addTo(this.map);
    // leaflet.marker.setLatLng([this.lat,this.long]);
    // console.log(this.lat);
    this.mylat += 0.01;
    this.lat = this.mylat.toString();
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
