import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { productosService } from '../../services/productos.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  productosLista;

  constructor(private productosService: productosService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.productosService.getproductos().subscribe(res => {
      this.productosLista = res;
      console.log(this.productosLista)
    })
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

}
