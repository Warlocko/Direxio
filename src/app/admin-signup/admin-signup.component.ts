import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {
  isSignedIn = false

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null){
      this.isSignedIn = true
    }else{
      this.isSignedIn = false
    }
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }
  
  handleLogout(){
    this.isSignedIn = false
  }

}
