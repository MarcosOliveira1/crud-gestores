import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestorComponent } from './gestor/gestor.component';
import { ListarGestorComponent } from './listar-gestor/listar-gestor.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ServicoService } from './listar-gestor/servico.service';
import { GestorService } from './gestor/gestor.service';
import { FormsModule } from '@angular/forms';
import { AlterarComponent } from './alterar/alterar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GestorComponent,
    ListarGestorComponent,
    BarraNavegacaoComponent,
    AlterarComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [ServicoService,
    GestorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
