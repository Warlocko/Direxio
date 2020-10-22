import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  home:string = "Home"
  products:string = "Products"
  clients:string = "Clients"
  bookNow:string = "BOOK NOW!"

  constructor() { }

  ngOnInit(): void {
  }

}
