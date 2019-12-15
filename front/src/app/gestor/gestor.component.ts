import { Cadastros } from './model';
import { Component, OnInit } from '@angular/core';
import { GestorService } from './gestor.service';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  f: FormGroup;
  cadastros = new Cadastros();

  constructor(private gestorService: GestorService,private fb: FormBuilder) { }

  ngOnInit() {
  }

  criarFormularioDeUsuario() {
    this.f = this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      maticula: ['',Validators.compose([Validators.required])],
      setor: ['',Validators.compose([Validators.required])],
      dataNasc: ['',Validators.compose([Validators.required])]
    });
  }

  salvar(form: FormControl) {
    this.gestorService.adicionar(this.cadastros)
      .then(() => {
        form.reset();
        this.cadastros = new Cadastros();
      });
  }
  
}
