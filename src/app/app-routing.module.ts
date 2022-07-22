import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  { path: 'app-create-product', component: CreateProductComponent },
  { path: 'app-productos', component: ProductosComponent},
  { path: 'app-carrito', component: CarritoComponent},
  {path: '**', pathMatch: 'full', redirectTo:'app-productos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
