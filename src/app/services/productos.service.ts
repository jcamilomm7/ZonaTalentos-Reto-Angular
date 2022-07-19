import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url: string = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  //Nuevo
  getQuestionAll(): Observable<any> {
    let direction = this.url;
    return this.http.get<any>(direction);
  }
}
