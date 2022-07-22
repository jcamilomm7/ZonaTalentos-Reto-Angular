import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductosCarritoService } from '../../services/productos-carrito.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  carrito: any;

  productos: any;
  page: number = 0;

  constructor(
    private producto: ProductosService,
    private productosCarrito: ProductosCarritoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProductsAll();
    this.productosCarrito.selectedProducto$.subscribe(
      (producto: any) => (this.carrito = producto)
    );
  }

  getProductsAll(): void {
    this.producto.getProductsAll().subscribe((value) => {
      this.productos = value;
    });
  }

  onproductoSelected(producto: any): void {
    this.productosCarrito.setProducto(producto);
  }

  addCarrito(
    id: string,
    nombre: string,
    descripcion: string,
    precio: number,
    cantidad: number,
    imagen: string
  ) {
    this.onproductoSelected(this.carrito);

    let objeto = {
      id,
      nombre,
      descripcion,
      precio,
      cantidad,
      imagen,
      contador: 0,
    };

    if (this.carrito.length === 0) {
      objeto.contador++;
      this.carrito.push(objeto);
      this.toastr.success('Producto agregado');

      return;
    }

    const filtro = this.carrito.filter(
      (producto: any) => producto.id === objeto.id
    );

    if (filtro.length === 0) {
      objeto.contador++;
      this.carrito.push(objeto);
      this.toastr.success('Producto agregado');

      return;
    }

    this.carrito.map((producto: any, index: number) => {
      if (objeto.id === producto.id) {
        this.carrito[index].contador++;
        this.toastr.success('Producto agregado');
      }
    });
  }
}
