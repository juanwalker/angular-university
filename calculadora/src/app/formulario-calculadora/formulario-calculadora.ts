import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-calculadora',
  imports: [FormsModule],
  templateUrl: './formulario-calculadora.html',
  styleUrl: './formulario-calculadora.css'
})
export class FormularioCalculadora {

  valorA: number| null = null;
  valorB: number| null = null;


  @Output() resultadoSuma = new EventEmitter<number>();

  sumar() {

    if (this.valorA && this.valorB){
      const resultado = this.valorA + this.valorB
      this.resultadoSuma.emit(resultado);
    } else {
      console.log('Deben introducir valores correctos');
    }


  }

}
