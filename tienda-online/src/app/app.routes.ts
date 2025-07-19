import { Routes } from '@angular/router';
import { ListadoProductos } from './listado-productos/listado-productos';
import { FormularioProducto } from './listado-productos/formulario-producto/formulario-producto';

export const routes: Routes = [
    {path: '', component: ListadoProductos}, // http://localhost:4200/
    {path: 'listado', component: ListadoProductos},
    {path: 'agregar', component: FormularioProducto},
    {path: 'editar/:id', component: FormularioProducto}
];

 