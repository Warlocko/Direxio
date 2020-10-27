import { Component, OnInit, Directive, Input, ElementRef, HostListener  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  faceTreatments ;
  bodyTreatments ;
  otherTreatments ;
  appointmentText:string = "Make an appointment"
  popupTitle:string = ""
  popupText:string = ""
  popupImg:string = ""

  constructor(private translate: TranslateService) {
    this.translate.stream('TREATMENTS').subscribe(res => {
        this.faceTreatments = res.faceTreatments
        this.bodyTreatments = res.bodyTreatments
        this.otherTreatments = res.otherTreatments
    })
  }

  config = {
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: false,
    initialSlide: 0,
    mousewheel: false,
    setWrapperSize: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    centeredSlides: false,
    loop: false,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
        // when window width is >= 320px
        800: {
            slidesPerView: 3
        }
    }
};

  ngOnInit(): void {
    setTimeout(()=>{ document.getElementsByClassName('chosenSlider')[1].classList.remove("chosenSlider"); document.getElementsByClassName('chosenSlider')[1].classList.remove("chosenSlider"); }, 10);
  }

  show(name,text,img){
    document.getElementById('popupContainer').classList.add("popupShow");
    this.popupTitle = name
    this.popupText = text
    this.popupImg = img
  }

  hide(){
    document.getElementById('popupContainer').classList.remove("popupShow");
  }

  changeSlider(sliderId, elem){
    //@ts-ignore
    document.getElementsByClassName('chosenSlider')[0].classList.remove("chosenSlider");
    document.getElementById(sliderId).classList.add("chosenSlider");
    document.getElementsByClassName('chosenBtn')[0].classList.remove('chosenBtn');
    document.getElementById(elem).classList.add('chosenBtn');
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
