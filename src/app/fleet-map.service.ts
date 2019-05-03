import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FleetMapService {

  constructor() { }
  retriveDeviceId(){
    return localStorage.getItem('deviceId');
  }
}
