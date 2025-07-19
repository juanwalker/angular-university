import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Padre } from './padre/padre';
import { Hijo } from './padre/hijo/hijo';

export const routes: Routes = [

{
    path : '', component: ListadoUsuarios //localhost:4200/
},
{
    path : 'mostrar-mensaje', component: MostrarMensaje
},
{
    path : 'configuracion', children: [
        {path: 'padre', component: Padre}, //localhost:4200/configuracion/padre
        {path: 'hijo', component:Hijo}      //localhost:4200/configuracion/hijo
    ]
}

];
