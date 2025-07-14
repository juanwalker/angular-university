import { Injectable } from '@angular/core';
import { IngresoModel } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
    eliminar(ingreso: IngresoModel) {
      const indice: number = this.ingresos.indexOf(ingreso)
      this.ingresos.splice(indice,1);
    }
    ingresos: IngresoModel[]= [
      new IngresoModel('Salario',4000),
      new IngresoModel('Venta Coche',500),

    ]
}
