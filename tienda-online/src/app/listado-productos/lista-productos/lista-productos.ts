import { Component, Input } from '@angular/core';
import { Producto } from '../../producto/producto.model';
import { ProductoService } from '../../producto-service';

@Component({
  selector: 'app-lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css'
})
export class ListaProductos {
  @Input() productos!: Producto[] ;

  constructor(private productoService: ProductoService){
    
  }


  emitirDetalleProducto(producto:Producto){
    this.productoService.detalleProductorEmitter.emit(producto);
  }

}
