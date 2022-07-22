import { Component, OnInit } from '@angular/core';
import { ProductosCarritoService } from '../../services/productos-carrito.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  arrayCarrito: any;
  carrito$ = this.productosCarrito.selectedProducto$;
  total: number = 0;


  constructor(private productosCarrito: ProductosCarritoService, private toastr: ToastrService) {

  }


  ngOnInit(): void {
    this.carrito$.forEach((producto) => {
      this.arrayCarrito = producto;
      this.totalPagar();

    });
  }

  totalPagar() {
    this.arrayCarrito.map((producto: any) => {
      this.total += producto.contador * producto.precio;
    });
  }

  removerProducto(producto2: any) {
    this.total -= producto2.contador * producto2.precio;

    this.arrayCarrito.map((producto: any, index: number) => {
      if (producto.id === producto2.id) {
        this.arrayCarrito.splice(index, 1);
        this.toastr.error('Producto eliminado');

      }
    });
  }

}
