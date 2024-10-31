import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Employee } from '../../models/employee/employee';

interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  BASE_URL = "http://localhost:8080/login";

  httpOptions = {
    observe: "response" as "response",
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  // login(email: string, password:string) : [boolean, boolean]{
  //   if(email == "cliente@gmail.com" && password == "cliente123"){
  //       localStorage.setItem('user', 'customer');
  //       return[false, false];    
  //   }else{
  //     if(email == "funcionario@gmail.com" && password == "funcionario123"){
  //       localStorage.setItem('user', 'employee');
  //       return[false, false];    
  //     }
  //   }
  //   if(email == '' || password == ''){
  //       return [true, false]; //vazio e sem erro
  //   }
  //   return [false, true]; //não vazio e com erro
    
  // }

  login(loginData: Login): Observable<Employee | null> {
    
    return this.httpClient.post<Employee>(this.BASE_URL, loginData, this.httpOptions)
      .pipe(
        map((resp: HttpResponse<Employee>) => {
          if (resp.status === 200 && resp.body) {
            // Armazena o tipo de usuário no localStorage para navegação posterior
            localStorage.setItem('user', resp.body.userType === 'customer' ? 'customer' : 'employee');
            return resp.body;
          }
          return null;
        }),
        catchError( (err) => {
          if (err.status == 401) {
            return of(null); // Login inválido
          }
          else {
            return throwError( () => err);
          }
        })
      );
  }

  logout(){
    localStorage.removeItem('customer');
    localStorage.removeItem('employee');
  }  
}
