import { Component, OnInit, Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-treatment-slide',
  templateUrl: './treatment-slide.component.html',
  styleUrls: ['./treatment-slide.component.scss']
})
export class TreatmentSlideComponent implements OnInit {
  @Input() name:string;
  @Input() text:string;
  @Input() imgSrc:string;

  constructor() { }

  ngOnInit(): void {
  }
}
