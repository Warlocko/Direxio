import { Component, OnInit, Directive, Input, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  schedulerTitle:string = "Book Now"
  schedulerSubtitle:string = "We are excited to meet you and help you."
  schedulerFormName:string = "Full Name"
  schedulerService:string = "Service"
  schedulerPhone:string = "Phone Number"
  schedulerDate:string = "Preferred Date"
  schedulerHour:string = "Preferred Hour"
  schedulerBookBtn:string = "BOOK NOW!"
  disclaimer:string = "If we don't answer, please leave a message. We will get back to you as soon as possible. \n Thank you"

  constructor() { }

  ngOnInit(): void {
  }

}
