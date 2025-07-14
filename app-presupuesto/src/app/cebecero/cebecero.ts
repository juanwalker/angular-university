import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cebecero',
  imports: [CommonModule],
  templateUrl: './cebecero.html',
  styleUrl: './cebecero.css'
})
export class Cebecero {
  @Input() presupuestoTotal!: number;
  @Input() ingresoTotal!: number;
  @Input() egresoTotal!: number;
  @Input() porcentajeTotal!: number;

  
}
