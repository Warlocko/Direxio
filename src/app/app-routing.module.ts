import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { HomeComponent } from './translated/components/home/home.component';

const routes: Routes = [
  {path: 'admin', component: AdminSignupComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
 }
