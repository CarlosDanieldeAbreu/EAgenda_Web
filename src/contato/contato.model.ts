import { EntidadeBase } from "../shared/entidadeBase.model.js";

export class Contato extends EntidadeBase {
  public nome: string;
  public email: string;
  public telefone: string;
  public empresa: string;
  public cargo: string;

  constructor(nome: string, email: string, telefone: string, empresa: string, cargo: string) {
    super();
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.empresa = empresa;
    this.cargo = cargo
  }
}