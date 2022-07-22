import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


const iniProducto:[] = []

@Injectable({
  providedIn: 'root'
})
export class ProductosCarritoService {
  private producto$ = new BehaviorSubject<any>(iniProducto)

  constructor() { }

  get selectedProducto$():Observable<any>{
      return this.producto$.asObservable()
  }

  setProducto(producto:any):void{
    this.producto$.next(producto)
  }

  
}
