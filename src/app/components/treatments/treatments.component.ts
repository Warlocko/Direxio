import { Component, OnInit, Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss']
})
export class TreatmentsComponent implements OnInit {
  treatmentsTitle:string = "Personalized treatments\n according to your needs"
  treatmentsSubtitle:string = "We don't charge you for extra things"
  buttonFirst:string = "Face"
  buttonSecond:string = "Body"
  buttonThird:string = "More"
  face1Name:string = "Chemical Peel"
  face1Text:String = "A chemical peel is a technique used to improve the appearance of the face, neck, hands and body skin. A chemical solution is applied that causes the exfoliation and re-texturization of your skin by removing the outer layers. The new and regenerated skin is usually smoother and less wrinkled than the old one. The first days it can cause sensitiveness at the sun exposure. "
  face2Name:string = "Microdermoabrassion"
  face2Text:String = "Microdermabrasion uses a minimally abrasive instrument to gently sand your skin, removing the thicker and uneven outer layer.\n This type of skin rejuvenation is used to treat light scarring, discoloration, sun damage and stretch marks. Reduce fine lines and wrinkles, reduce or eliminate enlarged pores, treat acne and the scars left by acne and help thicken your collagen with a microdermasion treatment just for you."
  face3Name:string = "Hydra Facial"
  face3Text:String = "Is a non-invasive multi-step treatment that combines the benefits of next-level hydradermabrasion, a chemical peel, automated painless extractions (no pinching) and a special delivery of antioxidants, hyaluronic acid and peptides. It does all of this in one quick treatment that delivers real results without downtime or irritation."
  face4Name:string = "Microneedling"
  face4Text:String = "Microneedling is a dermaroller procedure that uses small needles to prick the skin. The purpose of treatment is to generate new collagen and skin tissue for smoother, strengthen, more toned skin. Microneedling is mostly used on the face and may treat various acne scars, wrinkles, and large pores."
  face5Name:string = "Dermaplaning"
  face5Text:String = "A derma blade removes dead cells and fassy hair of the skin revealing a bright complexion. This treatment can be combined with your choice of facial."
  face6Name:string = "Detox Facial + Dermoabrassion"
  face6Text:String = "This facial will give you radiant skin while improving pigmentation, reducing fine lines and wrinkles, and fighting acne, melasma and rosacea. "
  face7Name:string = "Acne Facial"
  face7Text:String = "The 24K gold facial provides nutrients, strengthens skin elasticity, and moisturizes the skin."
  face8Name:string = "Sun Spots / Hiperpigmentation"
  face8Text:String = "It is a procedure from 50 to 60 minutes that will lighten the dark spots of your skin layer by layer. It can be applied to all types of skin."
  face9Name:string = "Mommy to be Facial"
  face9Text:String = "This facial will give you radiant skin while improving pigmentation, reducing fine lines and wrinkles, and fighting acne, melasma and rosacea."
  face10Name:string = "24k Gold Facial"
  face10Text:String = "The 24K gold facial provides nutrients, strengthens skin elasticity, and moisturizes the skin."
  face11Name:string = "Signature Infusion Spa Facial"
  face11Text:String = "Is a facial therapy and massage that leaves your skin cleaner, softer, younger, and truly transformed. It helps to clear clogged pores, to quench parched skin to remove dead cells, to tighten the skin through lymphatic drainage massage."
  face12Name:string = "Just for Men"
  face12Text:String = "This treatment removes blackheads produced by the pollution. It shaves bumps and in-grown hair, also it kills bacteria that cause them. This treatment leaves the skin soft and smooth while cleaning the sun spots."
  face13Name:string = "Customized Peel"
  face13Text:String = "If you want your skin to look younger, more vibrant, and tighter, then you should come for one of our customized peel sessions. A peel will help restore and renew the surface of your skin by shedding a few layers of your skin evenly."
  face14Name:string = "Rosacea Treatment"
  face14Text:String = "Reduce the skin inflammation."
  face15Name:string = "Nonsurgical Skin Tightening"
  face15Text:String = "Minimize the appearance of loose skin, wrinkles by prompting collagen."
  body1Name:string = "Backcial"
  body1Text:string = "Designed to treat back acne and redness, this customized “backcial” will leave your back summer ready and as clear as the summer skies."
  body2Name:string = "Body Scrub Treatment "
  body2Text:string = "Promoting efficient circulation and skin cell turnover. Removing dead cells from the skin's surface. Smoothing and softening rough, dry skin. Helps ingrown hairs and smoothing razor bumps."
  body3Name:string = "Ear Candle Treatment"
  body3Text:string = "Ear candle is a hollow cone candle made of wax-covered fabric. The pointed end is placed in your ear while the other end is lit. The warm “suction” is believed to remove earwax, improve hearing, and treat conditions like sinus infections and colds. "
  body4Name:string = "Electrolysis"
  body4Text:string = "Electrolysis is a FDA-approved method of permanent hair removal. Electrolysis is suitable for any area of the body — including the eyebrows. No recovery time: People can resume their daily activities immediately after the procedure."
  other1Name:string = "Brow Tinting / Lash Tinting"
  other1Text:string = "This is a service to enhance your natural eyebrows. It is done with a semi-permanent dye and lasts about 2-3 weeks. Duration: 30 min."
  other2Name:string = "Microblading Eyebrow & Semi Permanent Makeup"
  other2Text:string = "Microblading isn't permanent. Although microblading works in a similar way to a regular tattoo inking, it doesn't go anywhere near as deep into the skin. It can last between 12 months and three years. And it includes 2 free retouch ups. \nSemi Permanent Makeup can lasts anywhere between 18 months to 10 years. Works in 0.08 millimeters from the epidermis. Local anaesthetic. Perfect for eyebrows, eye liners and lips."
  other3Name:string = "Hyaluron Pen For Plump Your Lips"
  other3Text:string = "This treatment involves an hyaluronic acid filler without the use of needles or injections."
  swipeText:string = "Swipe to see all our treatments"
  covidText:string = "We have all Covid-19 Precautions"
  appointmentText:string = "Make an appointment"
  popupTitle:string = ""
  popupText:string = ""
  popupImg:string = ""

  slideDataFace = [
    {
      firstName: this.face1Name,
      firstImg: "../../../assets/img/Face/1.png",
      firstId: "face1",
      firstText: this.face1Text,
      secondName: this.face2Name,
      secondImg: "../../../assets/img/Face/2.png",
      secondId: "face2",
      secondText: this.face2Text,
      thirdName: this.face3Name,
      thirdImg: "../../../assets/img/Face/3.png",
      thirdId: "face3",
      thirdText: this.face3Text,
    },{
      firstName: this.face4Name,
      firstImg: "../../../assets/img/Face/4.png",
      firstId: "face4",
      firstText: this.face4Text,
      secondName: this.face5Name,
      secondImg: "../../../assets/img/Face/5.png",
      secondId: "face5",
      secondText: this.face5Text,
      thirdName: this.face6Name,
      thirdImg: "../../../assets/img/Face/6.png",
      thirdId: "face6",
      thirdText: this.face6Text,
    },{
      firstName: this.face7Name,
      firstImg: "../../../assets/img/Face/7.png",
      firstId: "face7",
      firstText: this.face7Text,
      secondName: this.face8Name,
      secondImg: "../../../assets/img/Face/8.png",
      secondId: "face8",
      secondText: this.face8Text,
      thirdName: this.face9Name,
      thirdImg: "../../../assets/img/Face/9.png",
      thirdId: "face9",
      thirdText: this.face9Text,
    },{
      firstName: this.face10Name,
      firstImg: "../../../assets/img/Face/10.png",
      firstId: "face10",
      firstText: this.face10Text,
      secondName: this.face11Name,
      secondImg: "../../../assets/img/Face/11.png",
      secondId: "face11",
      secondText: this.face11Text,
      thirdName: this.face12Name,
      thirdImg: "../../../assets/img/Face/12.png",
      thirdId: "face12",
      thirdText: this.face12Text,
    },{
      firstName: this.face13Name,
      firstImg: "../../../assets/img/Face/13.png",
      firstId: "face13",
      firstText: this.face13Text,
      secondName: this.face14Name,
      secondImg: "../../../assets/img/Face/14.png",
      secondId: "face14",
      secondText: this.face14Text,
      thirdName: this.face15Name,
      thirdImg: "../../../assets/img/Face/15.png",
      thirdId: "face15",
      thirdText: this.face15Text,
    }
  ]

  slideDataBody = [
    {
      firstName: this.body1Name,
      firstImg: "../../../assets/img/Body/1.png",
      firstId: "body1",
      firstText: this.body1Text,
      secondName: this.body2Name,
      secondImg: "../../../assets/img/Body/2.png",
      secondId: "body2",
      secondText: this.body2Text,
      thirdName: this.body3Name,
      thirdImg: "../../../assets/img/Body/3.png",
      thirdId: "body3",
      thirdText: this.body3Text,
    },{
      firstName: this.body2Name,
      firstImg: "../../../assets/img/Body/2.png",
      firstId: "body4",
      firstText: this.body2Text,
      secondName: this.body3Name,
      secondImg: "../../../assets/img/Body/3.png",
      secondId: "body5",
      secondText: this.body3Text,
      thirdName: this.body4Name,
      thirdImg: "../../../assets/img/Body/4.png",
      thirdId: "body6",
      thirdText: this.body4Text,
    }
  ]

  slideDataOther = [
    {
      firstName: this.other1Name,
      firstImg: "../../../assets/img/Other/1.png",
      firstId: "other1",
      firstText: this.other1Text,
      secondName: this.other2Name,
      secondImg: "../../../assets/img/Other/2.png",
      secondId: "other2",
      secondText: this.other2Text,
      thirdName: this.other3Name,
      thirdImg: "../../../assets/img/Other/3.png",
      thirdId: "other3",
      thirdText: this.other3Text,
    }
  ]

  config = {
    direction: 'horizontal',
    slidesPerView: 1,
    slideToClickedSlide: false,
    mousewheel: false,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 50,
    slidesOffsetAfter: 0,
    spaceBetween: 50,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        }
    }
};

  constructor() { }

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

}
