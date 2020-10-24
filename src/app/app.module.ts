import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroSectionComponent } from './translated/components/intro-section/intro-section.component';
import { TreatmentsComponent } from './translated/components/treatments/treatments.component';
import { TreatmentSlideComponent } from './translated/components/treatment-slide/treatment-slide.component';
import { ProductsComponent } from './translated/components/products/products.component';
import { SingleProductComponent } from './translated/components/single-product/single-product.component';
import { AboutComponent } from './translated/components/about/about.component';
import { ReviewsComponent } from './translated/components/reviews/reviews.component';
import { SchedulerComponent } from './translated/components/scheduler/scheduler.component';
import { FooterComponent } from './translated/components/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ParallaxDirective } from './parallax.directive';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './translated/components/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, '../assets/languages/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    IntroSectionComponent,
    TreatmentsComponent,
    TreatmentSlideComponent,
    ProductsComponent,
    SingleProductComponent,
    AboutComponent,
    ReviewsComponent,
    SchedulerComponent,
    FooterComponent,
    ParallaxDirective,
    HomeComponent,
    AdminComponent,
    AdminSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [IvyCarouselModule],
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
