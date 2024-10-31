import { AccountService } from './../../../../services/account/account.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string = '';
  password:string = '';
  submiting: boolean = false;
  loading: boolean = false;
  message: string = '';

  loginConditions: [boolean, boolean] = [false, false]; //[Campos não preenchidos, Login incorreto]

  constructor(
    private router: Router,
    private accountService: AccountService
  ) {}

  // loginAction(){

  //   this.loginConditions = this.AccountService.login(this.email, this.password);

  //   if(!this.loginConditions[0] && !this.loginConditions[1]){

  //     if(localStorage.getItem('user') == 'customer'){

  //       this.router.navigate(['/home']);

  //     }else{

  //       this.router.navigate(['/employee-home']);
        
  //     }
      
  //   }

  // }

  loginAction(): void {
    this.loading = true;

    if (this.email && this.password) {

      const loginData = { email: this.email, password: this.password };

      this.accountService.login(loginData).subscribe({
        next: (usu) => {
          this.loading = false;
          if (usu) {
            // Dependendo do tipo de usuário, navega para a página correta
            if (localStorage.getItem('user') === 'customer') {
              this.router.navigate(['/home']);
            } else {
              this.router.navigate(['/employee-home']);
            }
          } else {
            this.message = "Usuário ou senha inválidos.";
          }
        },
        error: () => {
          this.loading = false;
          this.message = "Erro ao conectar com o servidor.";
        }
      });
    }
    else {
      this.loading = false;
      this.message = "Preencha todos os campos.";
    }
  }

  createAcount(){
    this.router.navigate(['/registration']);
  }
}
