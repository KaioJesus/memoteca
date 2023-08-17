import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ // Classe que pode ser utilizadas em outros componentes, em outras classe, através das injeções de dependências
  providedIn: 'root'
}) //providedIn -> fornecedor -> pode ser disponibilizado para toda a aplicação
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';
  //injeções de dependências é feita pelo construtor
  constructor(
    private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API); // listar pelo get através da API criada pelo json server
  }

  cria(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento); // postar o pensamento, método post
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento); //put -> editar
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url);
  }
  
  buscarId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url);

  }

}
