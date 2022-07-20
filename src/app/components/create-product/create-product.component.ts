import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public productoForm: FormGroup;

  public prueba = {
    id: '3',
    nombre: 'Balon',
    descripcion: 'Balon de futbol de marca golty original',
    precio: 100.0,
    cantidad: 20,
    imagen: 'https://picsum.photos/200/300',
  };
  constructor(
    public formBuilder: FormBuilder,
    /*   public router: Router, */
    private producto: ProductosService
  ) {
    this.productoForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      precio:[''],
      cantidad: [''],
      imagen:[''],

    });
    this.onSubmit();
  }

  onSubmit() {
    console.log(this.productoForm.value);
   /*  this.producto.saveProduct(this.prueba); */
    /*  this.router.navigate(['/app-crud-firebase']); */
  }

  ngOnInit(): void {}
}
