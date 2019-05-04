import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import { FleetMapService } from '../fleet-map.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
   deviceId:string;
   @ViewChild('map') mapContainer: ElementRef;
   map: any;
  constructor(private fleetMap:FleetMapService) { 

  }

  ngOnInit() {
    this.deviceId = this.fleetMap.retriveDeviceId();
    console.log(this.deviceId);
    this.loadmap();

  }
  loadmap() {
 
    this.map = leaflet.map("map").setView([13.0827,80.2707],13);
 
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.sharath.com'
    
    }).addTo(this.map);
    leaflet.marker([13.0827,80.2706]).addTo(this.map);
  }

}
