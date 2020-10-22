import { Component, Input, OnInit, Directive, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() imgSrc:string;
  @Input() name:string;
  @Input() text:string;
  @Input() price:number;

  constructor() { }

  ngOnInit(): void {
  }

}
