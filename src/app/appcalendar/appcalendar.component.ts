import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-appcalendar',
  templateUrl: './appcalendar.component.html',
  styleUrls: ['./appcalendar.component.scss']
})
export class AppcalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  calendarWeekends = true;
  calendarPlugins = [dayGridPlugin,timeGrigPlugin]; 
  calendarVisible = true;
  calenderHeight = "parent"

  // important!
}
