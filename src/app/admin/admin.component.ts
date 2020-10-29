import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { BookingsService } from '../services/bookings.service'
import { productosService } from '../translated/services/productos.service';
import * as moment from 'moment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  bookingsList
  productosList
  product = {
    name: "",
    description: "",
    price: 0,
    image: ""
  }
  booked = {
    Nombre: "Horario Apartado",
    Email: "-",
    Telefono: "-",
    Tratamiento: "-",
    Fecha: "",
    Hora: ""
  }
  dateChosen;

  myFilter

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService, private booking : BookingsService, private productosService : productosService) { 

  }

  ngOnInit(): void {
    this.productosService.getproductos().subscribe(res => {
      this.productosList = res
    })
    this.booking.getBookings().subscribe(res => {
      this.bookingsList = res.sort(this.compareDate);
    })
    this.myFilter = (d: Date): boolean => {
      const day = d.getDay();
      return day !== 0;
    }
  }

  compareDate( a, b ) {
    if ( a.Fecha < b.Fecha ){
      return -1;
    }
    if ( a.Fecha > b.Fecha){
      return 1;
    }
    if(a.Hora=="12 pm" && b.Hora=="1 pm"){
      return -1
    }
    if(a.Hora=="1 pm" && b.Hora=="12 pm"){
      return 1
    }
    if( a.Hora < b.Hora){
      return -1;
    }
    if(a.Hora > b.Hora){
      return 1;
    }
    return 0;
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  showProductForm(){
    var form = document.getElementById('productForm');

    form.classList.toggle("productFormActive")
  }

  checkHour(event){
    var dateChanged = event.value;
    this.dateChosen = dateChanged.getDay() !== 6
  }

  addBooking(){
    if (this.bookingsList.some(e => e.Fecha == moment(this.booked.Fecha).format('MM/DD/YYYY') && e.Hora == this.booked.Hora) ) {
      alert('Ese espacio ya está apartado.\n Favor de seleccionar otro.')
    }else if(this.booked.Fecha=="" || this.booked.Hora==""){
      alert('Por favor llena fecha y hora para apartar.')
    }else{
      this.booked.Fecha = moment(this.booked.Fecha).format('MM/DD/YYYY')
      this.booking.addBooking(this.booked);
      alert('Hora Apartada con éxito.')
    }
  }

  addProduct(){
    if(this.product.name!="" && this.product.price!=0 && this.product.image!=""){
      this.productosService.addproducto(this.product);
      alert('Producto agregado con éxito.')
    }else{
      alert('Por favor incluye nombre, precio e imagen.')
    }
    
  }

  deleteBooking(id:string){
    this.booking.deleteBooking(id)
  }

  deleteProduct(id:string){
    this.productosService.deleteproducto(id)
  }

}
