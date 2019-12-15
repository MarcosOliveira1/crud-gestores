import { Component, OnInit } from '@angular/core';
import { Cadastros } from '../gestor/model';
import {AlterarService} from './alterar.service';
import { FormControl } from '@angular/forms';
import { Router, NavigationExtras } from "@angular/router";


@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent implements OnInit {

  gestor;
  cadastros = new Cadastros();
  constructor(private AlterarService:AlterarService,private router: Router) { 
  }
  id = this.router.url.split("/");  
  ngOnInit() {
    return this.AlterarService.listar1(this.id[2]).subscribe(dados => this.gestor = dados);
  }
  alterar(form: FormControl,id) {
    this.AlterarService.alterar(this.cadastros,id)
      .then(() => {
        form.reset();
        this.cadastros = new Cadastros();
      });
  }

}
