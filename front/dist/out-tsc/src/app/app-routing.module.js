import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GestorComponent } from './gestor/gestor.component';
import { ListarGestorComponent } from './listar-gestor/listar-gestor.component';
const routes = [
    { path: "gestor", component: GestorComponent },
    { path: "listaGestor", component: ListarGestorComponent },
    { path: "**", redirectTo: "/listaGestor" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map