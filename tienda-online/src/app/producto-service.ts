import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: Producto[] = [new Producto('Pantalón',130.0),new Producto('Pantalón',80.0),new Producto('Pantalón',50.0)]


  detalleProductorEmitter = new EventEmitter<Producto>();

    // Se emitió una cadena(String), es lo que vamos a recibir del hijo
    agregarProducto(producto: Producto) {
      this.productos.push(producto);
    }

}
