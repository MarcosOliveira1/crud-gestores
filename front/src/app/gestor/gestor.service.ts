import { Cadastros } from './model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GestorService {

  gestorUrl = '/gestor';

  constructor(private http: HttpClient) { }

  adicionar(cadastros: Cadastros): Promise<Cadastros> {
    return this.http.post<Cadastros>(environment.apiUrl+this.gestorUrl, cadastros)
      .toPromise();
  }


}
