import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cadastros } from '../gestor/model';

@Injectable({
  providedIn: 'root'
})
export class AlterarService {

  constructor(private http: HttpClient) { }

  listar1(id){
    return this.http.get(environment.apiUrl+"/gestor/"+id);
}

alterar(cadastros: Cadastros,id): Promise<Cadastros> {
  return this.http.put<Cadastros>(environment.apiUrl+"gestor/"+id, cadastros)
    .toPromise();
    
}

}
