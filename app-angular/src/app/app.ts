import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { ComponenteEnLinea } from "./componente-en-linea/componente-en-linea";
import { Interpolacion } from './interpolacion/interpolacion';
import { Padre } from "./padre/padre";
import { Encapsulamiento } from './encapsulamiento/encapsulamiento';
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, ComponenteEnLinea, Interpolacion, Padre, Encapsulamiento, MostrarMensaje, Replicador, Saludar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo = 'Universidad Angular';
}
