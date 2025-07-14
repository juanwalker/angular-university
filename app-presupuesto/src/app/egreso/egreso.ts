import { Component, Input } from '@angular/core';
import { EgresoModel } from './egreso.model';
import { EgresoService } from './egreso-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  imports: [CommonModule],
  templateUrl: './egreso.html',
  styleUrl: './egreso.css'
})
export class Egreso {
   egresos!: EgresoModel[]
    @Input() ingresoTotal!: number;

   public constructor(private egresoService: EgresoService){
    this.egresos = this.egresoService.egresos
   }

   public eliminarRegistro(egreso: EgresoModel ){
      this.egresoService.eliminarRegistro(egreso);
   }

   calcularPorcentaje(egreso:EgresoModel){
    return egreso.valor / this.ingresoTotal
   }
}
