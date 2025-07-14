import { Injectable } from '@angular/core';
import { EgresoModel } from './egreso.model';
import { Egreso } from './egreso';


@Injectable({
  providedIn: 'root'
})
export class EgresoService {
      egresos: EgresoModel[]= [
        new EgresoModel('Renta Depto',900),
        new EgresoModel('Ropa',200),
  
      ]

      public eliminarRegistro(egreso:EgresoModel){
        let indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
      }

}
