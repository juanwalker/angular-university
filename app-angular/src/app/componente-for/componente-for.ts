import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css'
})
export class ComponenteFor {
  tareas: string[] = [
    'Aprender angular',
    'Desarollar un App',
    'Aprender TypeScript'
  ];

  agregarTarea(nuevaTarea: string){
    if (nuevaTarea){
      this.tareas.push(nuevaTarea)
    }
  }
}
