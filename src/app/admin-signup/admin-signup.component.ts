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
  }

}
