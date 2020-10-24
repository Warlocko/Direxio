import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface booking {
  id?: string,
  Nombre: string,
  Email: string,
  Tratamiento: string,
  Telefono: string,
  Fecha: string,
  Hora: string
}
 
@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private bookings: Observable<booking[]>;
  private bookingCollection: AngularFirestoreCollection<booking>;
 
  constructor(private afs: AngularFirestore) {
    this.bookingCollection = this.afs.collection<booking>('bookings');
    this.bookings = this.bookingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getBookings(): Observable<booking[]> {
    return this.bookings;
  }
 
  getBooking(id: string): Observable<booking> {
    return this.bookingCollection.doc<booking>(id).valueChanges().pipe(
      take(1),
      map(booking => {
        booking.id = id;
        return booking
      })
    );
  }
 
  addBooking(booking: booking): Promise<DocumentReference> {
    return this.bookingCollection.add(booking);
  }
 
  updateBooking(booking: booking): Promise<void> {
    return this.bookingCollection.doc(booking.id).update(booking);
  }
 
  deleteBooking(id: string): Promise<void> {
    return this.bookingCollection.doc(id).delete();
  }
}