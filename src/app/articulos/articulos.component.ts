import { Component, Input } from '@angular/core';

interface Articulo{
  imagen?: String; //el '?' indica que esta propiedad puede o no tener un valor;
  marca: String; //contendra la marca del articulo;
  peso: String; //contendra el peso del articulo;
  medida: String; //contendra la medida del articulo;
  precio: Number; //contendra el precio del articulo;
  tipo: String; //contendra que tipo de articulo es, para identificarlo;
  material: String; //contendra el material con el que fue fabricado;
}


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  title = 'DXBikes';

  @Input() dataEntrante: any;

  constructor(private servicioCarrito: ServicioCarritoService){};

  public item: Articulo[] = []; //Este sera el array que contendra los articulos con sus respectivas propiedades;


  ngOnInit(): void {
    this.item = [
      {
        imagen: '../assets/Cuadros/Patriot.jpg',
        marca: 'Patriot',
        peso: '2.1kg', 
        medida: '29', 
        precio: 53994,
        tipo: 'Cuadro',
        material: ''
      },
      {
        imagen: '../assets/Cuadros/Scott.jpg',
        marca: 'Scott',
        peso: '1,9kg', 
        medida: '29', 
        precio: 1850000,
        tipo: 'Cuadro',
        material: ''
      },
      {
        imagen: '../assets/Cuadros/Venzo.jpg',
        marca: 'Venzo',
        peso: '1.725kg', 
        medida: '29', 
        precio: 199200,
        tipo: 'Cuadro',
        material: ''
      },
      {
        imagen:'../assets/Ruedas/R26.jpg',
        marca:"Foxter 4.20",
        medida:"Rodado 26",
        material:"Aluminio",
        precio:30.987,
        tipo: 'Rueda',
        peso: ''
      },
      {
        imagen:'../assets/Ruedas/R28.jpg',
        marca:"Vrc 701 Houston",
        medida:"Rodado 28",
        material:"Aluminio",
        precio:16.500,
        tipo: 'Rueda',
        peso: ''
      },
      {
        imagen:'../assets/Ruedas/R29.jpg',
        marca:" Shimano Deore Xt",
        medida:"Rodado 29",
        material:"Aluminio",
        precio:158.336,
        tipo: 'Rueda',
        peso: ''
      }
    ]
  }
}
