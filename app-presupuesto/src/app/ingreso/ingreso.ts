import { Component, Input } from '@angular/core';
import { IngresoModel } from './ingreso.model';
import { IngresoService } from './ingreso-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  imports: [CommonModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css'
})
export class Ingreso {
  ingresos: IngresoModel[]= [];
  
  @Input() ingresoTotal!:number;


  constructor(private ingresoServicio:IngresoService){
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso: IngresoModel){

    this.ingresoServicio.eliminar(ingreso);
  }

}
