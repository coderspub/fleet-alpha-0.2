import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
   deviceId:string;
   @ViewChild('map') mapContainer: ElementRef;
   map: any;
  constructor() { 

  }

  ngOnInit() {
   this.deviceId = localStorage.getItem('deviceId');
    console.log(this.deviceId);
  
   
 

this.loadmap();

  }
  loadmap() {
    // this.map = leaflet.map("map").fitWorld();
    this.map = leaflet.map("map").setView([13.0827,80.2707],13);
 
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.sharath.com'
    
    }).addTo(this.map);
    leaflet.marker([13.0827,80.2707]).addTo(this.map);
  }

}
