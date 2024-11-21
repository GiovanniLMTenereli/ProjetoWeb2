import { SolicitacaoRequest } from "./solicitacaoRequest";

export interface BudgetRequest{
  idOrcamento: Number,
  valorOrcamento: Number,
  aprovado: boolean,
  rejeitado: boolean,
  motivoRejeicao: String|null,
  dataHoraRejeicao: Date|null,
  dataHoraCriacao: Date,
  dataHoraAprovacao: Date|null,
  idFuncionario: Number,
  nomeFuncionario: String,
  solicitacao: SolicitacaoRequest
}