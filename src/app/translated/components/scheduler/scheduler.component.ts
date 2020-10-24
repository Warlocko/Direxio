import { Component, OnInit, Directive, Input, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  schedulerTreatments ;

  constructor(private translate: TranslateService) { 
    this.translate.stream('SCHEDULER').subscribe(res => {
      if(this.translate.currentLang=='en'){
        this.schedulerTreatments = [
          {treatment: "CHEMICAL PEELS"},
          {treatment: "MICRODERMABRASION"},
          {treatment: "HYDRA FACIAL"},
          {treatment: "MICRONEEDLING"},
          {treatment: "DERMAPLANING"},
          {treatment: "DETOX FACIAL + MICRODERMABRASION"},
          {treatment: "ACNE FACIAL"},
          {treatment: "SUN SPOTS / HIPERPIGMENTATION"},
          {treatment: "MOMMY TO BE FACIAL"},
          {treatment: "24k GOLD FACIAL"},
          {treatment: "SIGNATURE INFUSION SPA FACIAL"},
          {treatment: "JUST FOR MEN"},
          {treatment: "ROSACEA TREATMENT"},
          {treatment: "NON-SURGICAL SKIN TIGHTENING"},
          {treatment: "CUSTOMIZED PEEL"},
          {treatment: "BACKCIAL"},
          {treatment: "BODY SCRUB TREATMENT"},
          {treatment: "EAR CANDLE TREATMENT"},
          {treatment: "ELECTROLYSIS"},
          {treatment: "BROW TINTING / LASH TINTING"},
          {treatment: "MICROBLADING EYEBROW / SEMI PERMANENT MAKEUP"},
          {treatment: "HYALURON PEN FOR PLUMP YOUR LIPS"}
      ]
      }else{
        this.schedulerTreatments = [
          {treatment: "Peeling Químico"},
          {treatment: "MICRODERMOABRASIÓN"},
          {treatment: "HIDRAFACIAL"},
          {treatment: "MICRONEEDLING"},
          {treatment: "DERMAPLANING"},
          {treatment: "FACIAL DETOX + MICRODERMOABRASIÓN"},
          {treatment: "FACIAL PARA ACNÉ"},
          {treatment: "HIPERPIGMENTACIÓN"},
          {treatment: "FACIAL PARA EMBARAZADAS"},
          {treatment: "FACIAL 24k DE ORO"},
          {treatment: "FACIAL DE INFUSION SPA"},
          {treatment: "PARA HOMBRES"},
          {treatment: "TRATAMIENTO DE ROSÁCEA"},
          {treatment: "ESTIRAMIENTO DE LA PIEL NO QUIRÚRGICO"},
          {treatment: "PEELING PERSONALIZADO"},
          {treatment: "FACIAL DE ESPALDA"},
          {treatment: "TRATAMIENTO DE EXFOLIACIÓN DE CUERPO"},
          {treatment: "TRATAMIENTO DE VELA PARA OÍDO"},
          {treatment: "ELECTRÓLISIS"},
          {treatment: "TINTE DE CEJAS / TINTE DE PESTAÑAS"},
          {treatment: "MICROBLADING / MAQUILLAJE SEMI PERMANENTE"},
          {treatment: "PLUMA HIALURÓNICA PARA REALZAR LOS LABIOS"}
      ]
      }
    })
    
  }

  ngOnInit(): void {
  }

}
