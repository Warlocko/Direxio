import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.scss']
})
export class IntroSectionComponent implements OnInit {
  introText1:string = "Not only taking care of your skin, but also pampering yourself.";
  bookNow:string = "BOOK NOW!";

  constructor() { }

  ngOnInit(): void {
  }

}
