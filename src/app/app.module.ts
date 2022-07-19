import { NgModule , } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {ProductosService} from './services/productos.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private producto: ProductosService){
    this.getQuestionsAll()

  }





  getQuestionsAll(): void {
    this.producto.getQuestionAll().subscribe(value => {
     console.log(value);
    })
  }
}
