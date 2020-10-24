import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { BookingsService } from '../services/bookings.service'
import { productosService } from '../translated/services/productos.service';

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

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService, private booking : BookingsService, private productosService : productosService) { 

  }

  ngOnInit(): void {
    this.productosService.getproductos().subscribe(res => {
      this.productosList = res
    })
    this.booking.getBookings().subscribe(res => {
      this.bookingsList = res;
      console.log(this.bookingsList)
    })
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  showProductForm(){
    var form = document.getElementById('productForm');

    form.classList.toggle("productFormActive")
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
