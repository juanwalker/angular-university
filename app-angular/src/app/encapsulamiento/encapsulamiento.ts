import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulamiento',
  imports: [],
  templateUrl: './encapsulamiento.html',
  styleUrl: './encapsulamiento.css'
})
export class Encapsulamiento {

  private titulo = 'Titulo Componente Encapsulamiento';

  get mostrarTitulo(){
    return this.titulo;
  }

  getTitulo(){
    return this.titulo;
  }

}
