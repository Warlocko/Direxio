import { Component, OnInit, Directive, Input, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
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
  dateChosen;
  todayDate = new Date()
  maxDate = new Date()
  myFilter

  constructor(private translate: TranslateService, private bookingService : BookingsService) {
    this.maxDate.setDate(this.todayDate.getDate() + 61)
    this.dateChosen = true
    this.bookingService.getBookings().subscribe(res => {
      this.bookingsList = res;
    })
    this.myFilter = (d: Date): boolean => {
      const day = d.getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0;
    }
    this.translate.stream('SCHEDULER').subscribe(res => {
      if(this.translate.currentLang=='en'){
        this.schedulerTreatments = [
          {treatment: "Chemical Peels"},
          {treatment: "Microdermabrasion"},
          {treatment: "Hydra Facial"},
          {treatment: "Microneedling"},
          {treatment: "Dermaplaning"},
          {treatment: "Detox Facial + Microdermabrasion"},
          {treatment: "Acne Facial"},
          {treatment: "Sun Spots / Hiperpigmentation"},
          {treatment: "Mommy To Be Facial"},
          {treatment: "24k Gold Facial"},
          {treatment: "Signature Infusion Spa Facial"},
          {treatment: "Just For Men"},
          {treatment: "Rosacea Treatment"},
          {treatment: "Non-surgical Sking Tightening"},
          {treatment: "Customized Peel"},
          {treatment: "Backcial"},
          {treatment: "Body Scrub Treatment"},
          {treatment: "Ear Candle Treatment"},
          {treatment: "Electrolysis"},
          {treatment: "Brow Tinting / Lash Tinting"},
          {treatment: "Microblading Eyebrow / Semi Permanent Makeup"},
          {treatment: "Hyaluron Pen for Plump your Lips"}
      ]
      }else{
        this.schedulerTreatments = [
          {treatment: "Peeling Químico"},
          {treatment: "Microdermoabrasión"},
          {treatment: "Hidrafacial"},
          {treatment: "Microneedling"},
          {treatment: "Dermaplaning"},
          {treatment: "Facial Detox + Microdermoabrasión"},
          {treatment: "Facial para Acné"},
          {treatment: "Hiperpigmentación"},
          {treatment: "Facial para Embarazadas"},
          {treatment: "Facial 24k de Oro"},
          {treatment: "Facial de Infusion Spa"},
          {treatment: "Para Hombres"},
          {treatment: "Tratamiento de Rosácea"},
          {treatment: "Estiramiento de la Piel no Quirúrgico"},
          {treatment: "Peeling Personalizado"},
          {treatment: "Facial de Espalda"},
          {treatment: "Tratamiento de Exfoliación de Cuerpo"},
          {treatment: "Tratamiento de Vela para Oído"},
          {treatment: "Electrólisis"},
          {treatment: "Tinte de Cejas / Tinte de Pestañas"},
          {treatment: "Microblading / Maquillaje Semi Permanente"},
          {treatment: "Pluma Hialurónica para Realizar los Labios"}
      ]
      }
    })
    
  }

  ngOnInit(): void {
  }

  checkHour(event){
    var dateChanged = event.value;
    this.dateChosen = dateChanged.getDay() !== 6
  }

  submit(){
    console.log(this.booking)
    if (this.bookingsList.some(e => e.Fecha === this.booking.Fecha) && this.bookingsList.some(e => e.Hora === this.booking.Hora)) {
      alert('Ese espacio ya está apartado.\n Favor de seleccionar otro.')
    }else if(this.booking.Nombre=="" || this.booking.Tratamiento=="" || this.booking.Email=="" || this.booking.Telefono=="" || this.booking.Fecha=="" || this.booking.Hora==""){
      alert('Por favor llene todos los campos para agendar su cita.')
    }else{
      this.booking.Fecha = moment(this.booking.Fecha).format('MM/DD/YYYY')
      this.bookingService.addBooking(this.booking);
      alert('Su cita ha sido agendada con éxito.')
    }
  }
}
