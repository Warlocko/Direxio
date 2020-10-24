import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface producto {
  id?: string,
  name: string,
  price: number,
  description: string,
  image: string
}
 
@Injectable({
  providedIn: 'root'
})
export class productosService {
  private productos: Observable<producto[]>;
  private productoCollection: AngularFirestoreCollection<producto>;
 
  constructor(private afs: AngularFirestore) {
    this.productoCollection = this.afs.collection<producto>('productos');
    this.productos = this.productoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getproductos(): Observable<producto[]> {
    return this.productos;
  }
 
  getproducto(id: string): Observable<producto> {
    return this.productoCollection.doc<producto>(id).valueChanges().pipe(
      take(1),
      map(producto => {
        producto.id = id;
        return producto
      })
    );
  }
 
  addproducto(producto: producto): Promise<DocumentReference> {
    return this.productoCollection.add(producto);
  }
 
  updateproducto(producto: producto): Promise<void> {
    return this.productoCollection.doc(producto.id).update(producto);
  }
 
  deleteproducto(id: string): Promise<void> {
    return this.productoCollection.doc(id).delete();
  }
}