import { EntidadeBase } from "../shared/entidadeBase.model.js";
import { Prioridade } from "./prioridade.enum.js";

export class Tarefa extends EntidadeBase{
  public descricao: string;
  public dataCriacao: Date;
  public prioridade: Prioridade;

  constructor(descricao: string, prioridade: Prioridade, id?: string){
    super();
    
    if (id) {
      this.id = id;
    }

    this.descricao = descricao;
    this.prioridade = prioridade;
    this.dataCriacao = new Date();
  }
}