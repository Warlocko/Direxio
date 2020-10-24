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
     
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('es')
    this.translate.use('es')
  }

  
}


