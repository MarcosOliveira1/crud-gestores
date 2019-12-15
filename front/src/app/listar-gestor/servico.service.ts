import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ServicoService {

  constructor(private http:HttpClient) { }

  getListarGestores(){
    return this.http.get(environment.apiUrl+"gestor");
  }

  excluir(id){
    return this.http.delete(environment.apiUrl+"gestor/"+id).toPromise();
  }
}
