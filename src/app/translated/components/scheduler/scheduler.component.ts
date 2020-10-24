import { Component, OnInit, Directive, Input, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  schedulerTreatments;
  bookingsList
  booking = {
    Nombre: "",
    Email: "",
    Tratamiento: "",
    Telefono: "",
    Fecha: "",
    Hora: ""
  };

  constructor(private translate: TranslateService, private bookingService : BookingsService) { 
    this.bookingService.getBookings().subscribe(res => {
      this.bookingsList = res;
      console.log(this.bookingsList)
    })
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
          {treatment: "PEELING QUÍMICO"},
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

  submit(){
    if (this.bookingsList.some(e => e.Fecha === this.booking.Fecha) && this.bookingsList.some(e => e.Hora === this.booking.Hora)) {
      alert('Ese espacio ya está apartado.\n Favor de seleccionar otro.')
    }else if(this.booking.Nombre=="" || this.booking.Tratamiento=="" || this.booking.Email=="" || this.booking.Telefono=="" || this.booking.Fecha=="" || this.booking.Hora==""){
      alert('Por favor llene todos los campos para agendar su cita.')
    }else{
      this.bookingService.addBooking(this.booking);
      alert('Su cita ha sido agendada con éxito.')
    }
  }
}
