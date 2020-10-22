import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';
import { productosService } from '../../services/productos.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  productsTitle:string = "Our Products"
  dayCreamName:string = "Day Cream 4oz"
  dayCreamText:string = "For normal and dry skin (custom formulas)"
  nightCreamName:string = "Night Cream 4oz"
  nightCreamText:string = "For normal and dry skin (custom formulas)"
  dayNightCreamName:string = "Day & Night Cream"
  dayNightCreamText:string = "For oily skin formula"
  eyeCreamName:string = "Eye Cream 4oz"
  eyeCreamText:string = ""
  hAcidName:string = "Hialuronic Acid"
  hAcidText:string = ""
  faceScrubName:string = "Face Scrub"
  faceScrubText:string = ""
  retinName:string = "Medical grade Retin A"
  retinText:string = ""
  furryName:string = "Furry treatment"
  furryText:string = "Infusion Spa also treats your furry family members with an organic ointment that helps with dry cracked nose and paws"
  productsText:string = "We give free consultation and orientation for the skin products that you use, but we also advise according to your skin type."
  consultText:string = "Get a Consultation"

  productosLista;

  constructor(private productosService: productosService) { }

  ngOnInit(): void {
    this.productosService.getproductos().subscribe(res => {
      this.productosLista = res;
    })
  }

}
