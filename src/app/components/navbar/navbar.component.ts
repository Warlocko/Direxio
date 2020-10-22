import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  home:string = "Home";
  treatments:string = "Treatments";
  products:string = "Products";
  aboutJacky:string = "About Jacky";
  reviews:string = "Reviews";
  bookNow:string = "BOOK NOW!";

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu():void{
    var menu = document.getElementById('navbarLinksMobile');

    menu.classList.toggle("hamburgerMenuVisible")

  }

}
