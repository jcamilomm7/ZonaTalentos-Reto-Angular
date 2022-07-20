import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url: string = 'http://localhost:3000/productos';
  private url2: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //Nuevo
  getProductsAll(): Observable<any> {
    let direction = this.url;
    return this.http.get<any>(direction);
  }

  saveProduct(producto: ProductoI): Observable<any> {
    let direction = this.url2 ;
    return this.http.post<any>(direction, producto);
  }
}
