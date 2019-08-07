import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import leaflet from 'leaflet';
declare var $: any;
@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})
export class ReportsComponent implements OnInit {
  lat:string = "13.0827";
  long:string ="80.2707";
  map:any;
  theMarker: any;

  constructor() {}

  ngOnInit() {
    // this.loadmap();
  }
  generateReport(form: NgForm) {
    if (
      form.value.deviceId == "" ||
      form.value.fromDate == "" ||
      form.value.toDate == ""
    ) {
      console.log("enter the form");
    }
  }
  // loadmap() {
  // console.log("loadinf map");
  //   this.map = leaflet.map("map").setView([13.0827,80.2707],13);
 
  //   leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attributions: 'www.sharath.com'
    
  //   }).addTo(this.map);
  //    this.theMarker = leaflet.marker([this.lat,this.long]).addTo(this.map);
    
  // }
//  data = $("#formControlRange").value;
}
