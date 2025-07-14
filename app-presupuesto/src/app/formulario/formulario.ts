import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso-service';
import { EgresoService } from '../egreso/egreso-service';
import { Ingreso } from '../ingreso/ingreso';
import { IngresoModel } from '../ingreso/ingreso.model';
import { EgresoModel } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  tipo:string = "ingresoOperacion"; 
  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(private ingresoServicio: IngresoService, private egresoServicio:EgresoService){

  }

  agregarValor() {
    if (this.descripcionInput != null && this.valorInput != null){
      if (this.tipo === "ingresoOperacion"){
          this.ingresoServicio.ingresos.push(new IngresoModel(this.descripcionInput,this.valorInput));
      } else {
        this.egresoServicio.egresos.push(new EgresoModel(this.descripcionInput,this.valorInput));
      }
    } else {
      console.log("Introduce valores en descripción y valor válidos")
    }
    // Limpia formularios
    this.descripcionInput = null;
    this.valorInput = null;

  }

  tipoOperacion(evento: Event) {
    const elementoSelect = evento.target as HTMLSelectElement
    this.tipo = elementoSelect.value;
  }
}
