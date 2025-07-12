import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios-service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.html',
  styleUrl: './listado-usuarios.css'
})
export class ListadoUsuarios {
  usuarios: any[] = []
constructor(private usuariosService: UsuariosService){

}

ngOnInit(){
  this.usuariosService.obtenerDatos().subscribe((datos) => {
    this.usuarios = datos;
  });
}

}
