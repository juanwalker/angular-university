import {Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  eliminarProducto(productoId: number) {
    const indice = this.productos.findIndex(p => p.id === productoId);
    if (indice !== -1){
      this.productos.splice(indice,1);
    }

  }
  
  // Variable para el ID siguiente y unico
  private idSiguiente = 1;

  productos: Producto[] = [];

  constructor(){
    this.inicializarProductos();
  }

  inicializarProductos() {
    const producto1 = new Producto(this.idSiguiente++, 'Pantalón', 130.0);
    const producto2 = new Producto(this.idSiguiente++, 'Camisa', 80.0);
    const producto3 = new Producto(this.idSiguiente++, 'Playera', 50.0);
    // Agregamos al arreglo de productos
  
    this.productos.push(producto1, producto2, producto3);
  
  }


  /*
   // Se emitió una cadena(String), es lo que vamos a recibir del hijo
  detalleProductorEmitter = new EventEmitter<Producto>();
  */

    // Agregar o modificar
    guardarProducto(producto: Producto) {
      console.log(producto);
      if (producto.id === null){
        producto.id = this.idSiguiente++;
        this.productos.push(producto);
      } else{
        // Si el producto tiene un ID, entonces lo actualizamos
        const indice = this.productos.findIndex(p => p.id === producto.id);
        if (indice !== -1){
          this.productos[indice] = producto;
        }
      }
    }

    getProductoById(id:number): Producto | undefined {
      return this.productos.find(producto => producto.id === id);
    }

}
