import { Injectable } from '@angular/core';
import { MaintenceRequest } from '../../models/mainteceRequest';
import { RequestStatus } from '../../models/enums/requestStatus';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
 
  private requests: MaintenceRequest[] = []

  BASE_URL = 'http://localhost:8080/api/solicitacoes';
  BASE_URL_SOLICITACAO = 'http://localhost:8080/api/solicitacoes/estado/aberta';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getSolicitacoes(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}`, this.httpOptions);
  }
  getSolicitacoesAberta(): Observable<any> {
    console.log('Esta funcionando!')
    return this.http.get<any>(`${this.BASE_URL_SOLICITACAO}`, this.httpOptions);
  }

  // private requests: MaintenceRequest[] = [
    // {
    //   status: RequestStatus.Approved,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 0,
    //   userName: 'João Pereira',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Open,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 1,
    //   userName: 'Ana Banana',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Rejected,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 2,
    //   userName: 'Pedro Guiliver',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Budgeted,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 3,
    //   userName: 'Guilherme Alameda',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Fixed,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 4,
    //   userName: 'Julia Gamer',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Payed,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 5,
    //   userName: 'Heitor Souza',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Redirected,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 6,
    //   userName: 'Carolina Soares',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Budgeted,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 7,
    //   userName: 'Davi de Souza',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Finished,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 8,
    //   userName: 'Thiago Cezar',
    //   description: 'Notebook com defeito'
    // },
    // {
    //   status: RequestStatus.Open,
    //   date: new Date().toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
    //   id: 9,
    //   userName: 'Ana Beatriz',
    //   description: 'Notebook com defeito'
    // },
  // ];

  getRequests() : MaintenceRequest[] {
    return this.requests;
  }

  addRequest( descEquipamento:string, categoria:number, descDefeito:string, data:Date){
    var req: MaintenceRequest =
    {
      status: RequestStatus.Open,
      date: data.toLocaleString('pt-BR', {dateStyle: 'short', timeStyle: 'short'}),
      id: 9,
      userName: 'Thiago Cezar',
      description: descEquipamento
    };

    this.requests.push(req);
  }


}
