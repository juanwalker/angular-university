import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../producto/producto.model';
import { ProductoService } from '../../producto-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {
  
  productoId: number | null = null;
  descripcionInput: string = ''
  precioInput: number = 0

  cancelar() {
    //Redirigir al listado
    this.router.navigate(['/']);
  }

  eliminarProducto(){
    if (this.productoId !== null){
      this.productoService.eliminarProducto(this.productoId);
      this.limipiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limipiarFormulario(){
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = 0;
  }


  ngOnInit(){


    //Verificamos si debemos de cargar un producto ya existente
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const producto = this.productoService.getProductoById(Number(id));
      if (producto){
        this.productoId= producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput =  producto.precio;
      }
    }
  }

  constructor(private productoService: ProductoService,
     private router:Router,
     private route:ActivatedRoute){

  }


  guardarProducto(evento: Event) {
      evento.preventDefault()
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0){
      console.log('Debes ingresar una descripción y un precio válido');
      return;
    }



    const producto = new Producto(this.productoId,this.descripcionInput,Number(this.precioInput));
    this.productoService.guardarProducto(producto)
    this.limipiarFormulario()
    this.router.navigate(['/']);
  }


}
