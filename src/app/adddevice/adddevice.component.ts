import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.scss']
})
export class AdddeviceComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  addAppReroute(){
    this.router.navigate(['/dashboard/persontracking/persontrackingdetails']);
  }
}
