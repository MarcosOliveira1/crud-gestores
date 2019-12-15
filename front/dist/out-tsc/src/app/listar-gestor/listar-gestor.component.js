import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListarGestorComponent = class ListarGestorComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get("http://localhost:8080/gestor").
            subscribe(dados => this.gestores = dados);
    }
};
ListarGestorComponent = tslib_1.__decorate([
    Component({
        selector: 'listar-gestor',
        templateUrl: './listar-gestor.component.html',
        styleUrls: ['./listar-gestor.component.css']
    })
], ListarGestorComponent);
export { ListarGestorComponent };
//# sourceMappingURL=listar-gestor.component.js.map