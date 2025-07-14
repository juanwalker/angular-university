import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../producto/producto.model';
import { ProductoService } from '../../producto-service';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {

  constructor(private productoService: ProductoService){

  }


  agregar() {
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0){
      console.log('Debes ingresar una descripción y un precio válido');
      return;
    }
    const producto = new Producto(this.descripcionInput,Number(this.precioInput));
    this.productoService.agregarProducto(producto)
  }
  descripcionInput: string = ''
  precioInput: number = 0

}
