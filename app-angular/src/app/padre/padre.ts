import { Component, ViewChild } from '@angular/core';
import { Hijo } from './hijo/hijo';
import { HijoViewchild } from "./hijo-viewchild/hijo-viewchild";

@Component({
  selector: 'app-padre',
  imports: [Hijo, HijoViewchild],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {

//Esto es utilizando double binding el la comunicación entre el padre y el hijo utilizando @input y @output

  mensajeDesdeELHijo: string = '';
  mensajePadre: string = 'Mensaje desde el componente padre con @input';



  // Se emitió una cadena(String), es lo que vamos a recibir del hijo
  recibirNotificacion(mensaje: string) {
    this.mensajeDesdeELHijo = mensaje;
  }

// Hasta acá va el double binding

// Esto es accediendo al componente hijo usando el decorador @viewChild

  @ViewChild(HijoViewchild) componenteHijo!: HijoViewchild;

  cambiarMensajeHijo() {
      this.componenteHijo.cambiarMensaje('Mensaje actualizado desde el componente padre')
  }

}
