import { Injectable, Output, EventEmitter } from "@angular/core";

//@Injectable es un decorador que marca una clase como inyectable y permite
//inyectarla como dependencia en otro componentes, servicios o modulos;
@Injectable({
    providedIn: "root"
})

//Clase que se va a inyectar es ServicioCarritoService;
export class ServicioCarritoService {

    @Output() diparadorArticulo: EventEmitter<any> = new EventEmitter();
    //@Output es un componente hijo, permite que los datos fluyan,
    //desde el hijo hacia el padre;
    //Propiedad diparadorArticulo, es el puerto por donde pasan los datos, del hijo al padre;
    //Se usa esta propiedad para disparar un evento y ese evento le notifica al componente
    //padre que ocurrio un cambio;


    constructor(){}
}