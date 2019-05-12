import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FleetMapService {

  constructor() { }
  retriveAppId(){
    return localStorage.getItem('a_id');
  }
  retriveCustomerId(){
    return localStorage.getItem('c_id');
  }
}
