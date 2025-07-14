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
import { ComponenteIf } from './componente-if/componente-if';
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from './componente-for/componente-for';
import { Viewchild } from "./viewchild/viewchild";
import { MensajeService } from './mensaje-service';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";
import { EjemploPipes } from "./ejemplo-pipes/ejemplo-pipes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NuevoComponente,
    ComponenteEnLinea,
    Interpolacion,
    Padre,
    Encapsulamiento,
    MostrarMensaje,
    Replicador,
    ComponenteIf,
    ComponenteFor,
    Saludar, AgregarTarea, Viewchild, ListadoUsuarios, EjemploPipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo = 'Universidad Angular';
  mensaje: String;

  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
  }

}
