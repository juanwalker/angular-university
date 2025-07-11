import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  imports: [],
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css'
})
export class NuevoComponente {
  tituloNuevoComponente = 'Nuevo Componente';
}
