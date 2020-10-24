import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService ) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
