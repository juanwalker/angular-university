import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./componentes/cabecero.component/cabecero.component";
import { PiePaginaComponent } from './componentes/pie-pagina.component/pie-pagina.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent,PiePaginaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titulo = 'Control de Clientes';
}
