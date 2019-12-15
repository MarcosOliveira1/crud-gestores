import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {ServicoService} from './servico.service';
@Component({
  selector: 'listar-gestor',
  templateUrl: './listar-gestor.component.html',
  styleUrls: ['./listar-gestor.component.css']
})
export class ListarGestorComponent implements OnInit {

  gestores;

  constructor(private ServicoService:ServicoService,private location: Location) { }

  ngOnInit() {
    this.ServicoService.getListarGestores().subscribe(dados => this.gestores = dados);
  }

  load() {
    location.reload()
  }

  excluir(id){
    this.ServicoService.excluir(id);
    return this.load();
  }

  alterar(id){
    alert(id);
  }

}
