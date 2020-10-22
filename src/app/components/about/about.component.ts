import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutTitle:string = "ABOUT JACKY"
  aboutText:string = "She is a medical grade aesthetician that has dedicated her professional life to helping men, women and teenagers with facial skin problems. She was born in La Paz, Bolivia but she has been living in Dallas for the past 16 years. In addition, she has been working for over 30 years in diverse facial treatments such as microdermoabrasion, acne treatments, extractions, peels, skin spots, microblading, laser treatments and others."
  aboutQuote:string = "My heart fills with joy, when my clients are satisfied and fulfilled with my service." 
  cardTitleFirst:string = "Licensed Aesthetician"
  cardTextFirst:string = "Over 30 years of experience."
  cardTitleSecond:string = "Skin Expert"
  cardTextSecond:string = "Skin care consultation and recommendation."
  cardTitleThird:string = "Licensed Laser Technician"
  cardTextThird:string = "Specialist in laser hair removal, photo facial, etc."
  aboutButton:string = "Get a Consultation"

  constructor() { }

  ngOnInit(): void {
  }

}
