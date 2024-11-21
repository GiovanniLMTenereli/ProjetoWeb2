import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeSidebarComponent } from '../../employee-sidebar/employee-sidebar.component';
import { FormsModule } from '@angular/forms';
import { MaintenceRequest } from '../../../../models/mainteceRequest';
import { CommonModule } from '@angular/common';
import { RequestStatus } from '../../../../models/enums/requestStatus';
import { BudgetService } from '../../../../services/budget/budget.service';
import { estadoSolicitacao, SolicitacaoRequest } from '../../../../models/solicitacaoRequest';

@Component({
  selector: 'app-make-budget',
  standalone: true,
  imports: [EmployeeSidebarComponent, FormsModule, CommonModule],
  templateUrl: './make-budget.component.html',
  styleUrl: './make-budget.component.css'
})

export class MakeBudgetComponent implements OnInit {
  valorOrcamento: number = 0.00;
  descricaoOrcamento: string = '';
  request: SolicitacaoRequest | null = null;

  constructor(private router: Router, private BudgetService: BudgetService) {}

  ngOnInit(): void {
    const navigation = this.router.lastSuccessfulNavigation;
    console.log("Navegação recebida:", navigation);
    if (navigation?.extras.state) {
      this.request = navigation.extras.state['request'];
      console.log("Dados da solicitação:", this.request);
    } else {
      console.error("Nenhuma solicitação recebida.");
    }
  }

  confirmBudget(descricao: string): void {
    this.descricaoOrcamento = descricao;
    var estado:estadoSolicitacao = {
      descricao: 'Orçada',
      id: 2,
    }
    if (this.request) {
      this.request.estadoSolicitacao = estado;
      this.BudgetService.newBudget(this.request, this.valorOrcamento, this.descricaoOrcamento);
      console.log("Solicitação orçada com o valor: " + this.valorOrcamento + " - Descrição: " + this.descricaoOrcamento);
    }
  }


    returnHome(){
      this.router.navigate(['/view-requests'], { state: { updatedRequest: this.request}});
  }
}
