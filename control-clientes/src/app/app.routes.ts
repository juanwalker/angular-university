import { Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero.component/tablero.component';
import { LoginComponent } from './componentes/login.component/login.component';
import { EditarClienteComponent } from './componentes/editar-cliente.component/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado.component/no-encontrado.component';
import { LoginGuardianService } from './servicios/login-guardian.service';

export const routes: Routes = [

{path: '', component: TableroComponent, canActivate: [LoginGuardianService]}, // http://localhost:4200/
{path: 'login', component: LoginComponent}, // http://localhost:4200/login
{path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [LoginGuardianService]}, // http://localhost:4200/cliente/editar/#
{path: '**', component: NoEncontradoComponent}

];
