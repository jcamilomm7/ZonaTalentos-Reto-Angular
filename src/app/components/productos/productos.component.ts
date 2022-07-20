import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


 @Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: any

  constructor(private producto: ProductosService) { }

  ngOnInit(): void {
    this.getQuestionsAll();
  }


  getQuestionsAll(): void {
    this.producto.getQuestionAll().subscribe((value) => {
      this.productos = value
    });
  }


}

