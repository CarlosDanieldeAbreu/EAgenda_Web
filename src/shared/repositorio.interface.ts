import { EntidadeBase } from "./entidadeBase.model.js";

export interface IRepositorio<T extends EntidadeBase> {
  inserir(registro: T): void;
  selecionarTodos(): T[];
}