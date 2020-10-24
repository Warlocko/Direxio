import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroSectionComponent } from './translated/components/intro-section/intro-section.component';
import { HomeComponent } from './translated/components/home/home.component';

const routes: Routes = [
  {path: 'admin', component: IntroSectionComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
 }
