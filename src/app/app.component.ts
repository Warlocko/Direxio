import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Direxio';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('es')
    this.translate.use('es')
  }
}


