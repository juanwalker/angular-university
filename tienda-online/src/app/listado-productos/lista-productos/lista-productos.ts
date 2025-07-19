import { Component, Input } from '@angular/core';
import { Producto } from '../../producto/producto.model';
import { ProductoService } from '../../producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
agregarProducto() {
throw new Error('Method not implemented.');
}
  @Input() productos!: Producto[] ;

  constructor(private productoService: ProductoService, private router: Router) {
    
  }

  /*
  emitirDetalleProducto(producto:Producto){
    this.productoService.detalleProductorEmitter.emit(producto);
  }
  */

  editarProducto(id:number){
    this.router.navigate(['/editar', id]);
  }

}
