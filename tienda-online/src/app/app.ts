import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductosComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected titulo = 'Tienda Online';


  constructor(private loginService: LoginService){}

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

salir() {
    return this.loginService.logout();
}

}
