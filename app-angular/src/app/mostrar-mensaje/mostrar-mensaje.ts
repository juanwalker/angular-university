import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css'
})
export class MostrarMensaje {
  mensaje: String = '';

  constructor(private route: ActivatedRoute){

  }


  ngOnInit(){
    this.mensaje = this.route.snapshot.queryParams['mensaje']
  }

  resetearMensaje() {
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.mensaje= 'Hola, has hecho click en el botón';
  }

}
