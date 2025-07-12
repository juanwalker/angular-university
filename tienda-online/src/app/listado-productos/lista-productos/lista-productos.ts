import { Component, Input } from '@angular/core';
import { Producto } from '../../producto/producto.model';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
  @Input() productos!: Producto[] ;

  
}
