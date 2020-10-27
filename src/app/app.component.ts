import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationStart } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Direxio';
  showPetals: boolean = false;

  constructor(public translate: TranslateService,private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url == "/") {
          this.showPetals = true;
        }else{
          this.showPetals = false;
        }
      }
    })
     
    this.translate.addLangs(['en', 'es'])
    this.translate.setDefaultLang('en')
    this.translate.getTranslation('en').subscribe(() => {});
    setTimeout(()=> {this.translate.use('en')},400)
  }

  
}


