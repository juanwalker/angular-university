import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cebecero } from "./cebecero/cebecero";
import { Formulario } from "./formulario/formulario";

import { IngresoService } from './ingreso/ingreso-service';
import { EgresoService } from './egreso/egreso-service';
import { Ingreso } from './ingreso/ingreso';
import { Egreso } from './egreso/egreso';
import { IngresoModel } from './ingreso/ingreso.model';
import { EgresoModel } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cebecero, Formulario,Ingreso,Egreso],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app-presupuesto';
  ingresos: IngresoModel[] = []
  egresos: EgresoModel[] = []
  ingresoTotal: number= 0

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ){
      this.ingresos = ingresoService.ingresos;
      this.egresos = egresoService.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  getPorcentajeTotal(){
      return this.getEgresoTotal()/ this.getIngresoTotal()
  }

  getPresupuestoTotal(){
      return this.getIngresoTotal() - this.getEgresoTotal()
  }

}
