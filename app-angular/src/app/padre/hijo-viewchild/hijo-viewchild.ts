import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-viewchild',
  imports: [HijoViewchild],
  templateUrl: './hijo-viewchild.html',
  styleUrl: './hijo-viewchild.css'
})
export class HijoViewchild {
  mensaje: string = 'Mensaje desde el componente hijo';

  cambiarMensaje(nuevoMensaje:string){
    this.mensaje = nuevoMensaje;
  }

}
