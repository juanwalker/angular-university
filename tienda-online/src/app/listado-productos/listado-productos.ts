import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { FormularioProducto } from "./formulario-producto/formulario-producto";
import { ListaProductos } from "./lista-productos/lista-productos";
import { ProductoService } from '../producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, FormularioProducto, ListaProductos],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  agregarProducto() {
    this.router.navigate(['agregar'])
  }

  productos: Producto[] = [];

  constructor(private productoService: ProductoService,private router: Router) {


  }

  ngOnInit(){
    this.productos = this.productoService.productos;
    //Procesamos el evento emitido
    
    //this.productoService.detalleProductorEmitter.subscribe((producto) => alert(`Producto: ${producto.descripcion},$${producto.precio}`));
  }

  

}
