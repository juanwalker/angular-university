import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormularioCalculadora } from "./formulario-calculadora/formulario-calculadora";
import { Resultado } from "./resultado/resultado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioCalculadora, Resultado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

    
  resultadoPadre: number = 0;

  protected title = 'calculadora';

  procesarResultado(resultado: number) {
    this.resultadoPadre = resultado;
  }

}
