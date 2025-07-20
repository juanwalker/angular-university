import { Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: {[llave:string]: Producto} = {};
  productosActualizados = new Subject<{[llave:string]: Producto}>();


  constructor(private datosService: DatosService){}

  listarProductos(){
    return this.datosService.listarProductos();
  }

  // Agregar o Modificar un producto existente
  guardarProducto(producto: Producto, llave: string | null = null) {
    if(llave === null){
      // Caso agregar
      this.datosService.agregarProducto(producto).subscribe(() => {
        console.log(`Se agrego el nuevo producto: ${producto.descripcion} - ${producto.precio}`);
        this.refrescarProductos();
      });
    } else {
      this.datosService.modificarProducto(producto,llave).subscribe(() => {
        this.refrescarProductos();
      })
    }
  }

  private refrescarProductos(){
    return this.datosService.listarProductos().subscribe((productos: {[llave:string]: Producto}) => {
      this.setProductos(productos);
    });

  }

  setProductos(productos: {[llave:string]: Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos); // Nos permite emitir la actualización de la lista
  }


  getProductoByLlave(llave: string): Producto | undefined {
    return this.productos[llave];
    //return this.productos.find(producto => producto.id === id);
  }

  eliminarProducto(llave: string){
    this.datosService.eliminarProducto(llave).subscribe(() => {
      console.log(`Producto con llave ${llave} eliminado`);
      this.refrescarProductos();
    });

  }

}
