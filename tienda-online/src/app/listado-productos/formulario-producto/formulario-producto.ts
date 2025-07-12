import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../producto/producto.model';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {

  @Output() notificarPadre = new EventEmitter<Producto>();

  agregar() {
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0){
      console.log('Debes ingresar una descripción y un precio válido');
      return;
    }
    const producto = new Producto(this.descripcionInput,Number(this.precioInput));
    this.notificarPadre.emit(producto);
  }
  descripcionInput: string = ''
  precioInput: number = 0

}
