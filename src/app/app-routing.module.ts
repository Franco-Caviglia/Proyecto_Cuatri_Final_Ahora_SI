import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'articulos',component:ArticulosComponent},
  { path:'contactos', component:ContactosComponent},
  { path:'carrito', component:CarritoComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
