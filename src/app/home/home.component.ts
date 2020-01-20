import { Component, OnInit, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { CalenderComponent } from '../calender/calender.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('myCalendar', { static: true })
  myCalendar: CalenderComponent;
}
