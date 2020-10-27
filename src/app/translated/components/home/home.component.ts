import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('es')
    this.translate.use('es')
   }

  ngOnInit(): void {
    setTimeout(() => {document.getElementsByClassName('introImg')[0].id =''}, 1000)
  }

  public toggleMenu():void{
    var menu = document.getElementById('navbarLinksMobile');

    menu.classList.toggle("hamburgerMenuVisible")

  }

  scrollAndClose(id:string){
    this.scroll(id)
    var menu = document.getElementById('navbarLinksMobile');

    menu.classList.toggle("hamburgerMenuVisible")
  }

  scroll(id:string) {
    const element = document.getElementById(id);
    const offset = 75;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  changeLang(language:string, btn:string) {
    document.getElementsByClassName('chosenLangBtn')[0].classList.remove("chosenLangBtn");
    document.getElementById(btn).classList.add('chosenLangBtn');
    this.translate.use(language)
    document.getElementsByClassName('introImg')[0].id =''
    document.getElementsByClassName('introImg')[0].id = 'introImgAnimated';
    setTimeout(() => {document.getElementsByClassName('introImg')[0].id =''}, 1000)
    
  }

}
