import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { ArticulosComponent } from '../articulos/articulos.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  imagen?: ArticulosComponent;
  marca?: ArticulosComponent;



  public listaArticulos: Array<any> = [];

  constructor(private articuloService: ServicioCarritoService){}

  ngOnInit(): void {
    this.articuloService.diparadorArticulo.subscribe(
      data => {this.listaArticulos.push(data)}
    );
  }


}
