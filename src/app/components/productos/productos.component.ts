import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';


 @Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: any
  page: number = 0;
  constructor(private producto: ProductosService) { }

  ngOnInit(): void {
    this.getProductsAll();
  }


  getProductsAll(): void {
    this.producto.getProductsAll().subscribe((value) => {
      this.productos = value
    });
  }


}

