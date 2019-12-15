import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestorComponent } from './gestor/gestor.component';
import { ListarGestorComponent } from './listar-gestor/listar-gestor.component';
import { AlterarComponent } from './alterar/alterar.component';



const routes: Routes = [
    { path: "gestor", component: GestorComponent },
    { path: "listaGestor", component: ListarGestorComponent },
    { path: "listaGestor/:id", component: AlterarComponent },
    { path: "**", redirectTo: "/listaGestor" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
