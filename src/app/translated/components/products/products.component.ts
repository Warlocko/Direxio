import { Component, OnInit,  Directive, Input, ElementRef, HostListener  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { productosService } from '../../services/productos.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  product1Name
  product1Description
  product1Img
  product1Price
  product2Name
  product2Description
  product2Img
  product2Price
  product3Name
  product3Description
  product3Img
  product3Price
  product4Name
  product4Description
  product4Img
  product4Price
  product5Name
  product5Description
  product5Img
  product5Price
  product6Name
  product6Description
  product6Img
  product6Price
  product7Name
  product7Description
  product7Img
  product7Price
  product8Name
  product8Description
  product8Img
  product8Price
  

  productosLista;

  constructor(private productosService: productosService, public translate: TranslateService) {
    this.translate.stream('PRODUCTS').subscribe(res => {
      this.product1Name = res.name1
      this.product1Description = res.description1
      this.product1Img = res.img1
      this.product1Price = res.price1
      this.product2Name = res.name2
      this.product2Description = res.description2
      this.product2Img = res.img2
      this.product2Price = res.price2
      this.product3Name = res.name3
      this.product3Description = res.description3
      this.product3Img = res.img3
      this.product3Price = res.price3
      this.product4Name = res.name4
      this.product4Description = res.description4
      this.product4Img = res.img4
      this.product4Price = res.price4
      this.product5Name= res.name5
      this.product5Description = res.description5
      this.product5Img = res.img5
      this.product5Price = res.price5
      this.product6Name= res.name6
      this.product6Description = res.description6
      this.product6Img = res.img6
      this.product6Price = res.price6
      this.product7Name = res.name7
      this.product7Description = res.description7
      this.product7Img  = res.img7
      this.product7Price = res.price7
      this.product8Name = res.name8
      this.product8Description = res.description8
      this.product8Img = res.img8
      this.product8Price = res.price8
    })
   }

  ngOnInit(): void {
    
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
