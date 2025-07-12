import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { FormularioProducto } from "./formulario-producto/formulario-producto";
import { ListaProductos } from "./lista-productos/lista-productos";

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioProducto, ListaProductos],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: Producto[] = [new Producto('Pantalón',130.0),new Producto('Pantalón',80.0),new Producto('Pantalón',50.0)]


  // Se emitió una cadena(String), es lo que vamos a recibir del hijo
  recibirNotificacion(producto: Producto) {
    this.productos.push(producto);
  }




}
