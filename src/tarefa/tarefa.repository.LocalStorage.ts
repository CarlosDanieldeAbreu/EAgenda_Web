import { IRepositorio } from "../shared/repositorio.interface.js";
import { IRepositorioSerializavel } from "../shared/repositorioSerializavel.Interface.js";
import { Tarefa } from "./tarefa.model.js";

export class TarefaRepositoryLocalStorage implements IRepositorio<Tarefa>, IRepositorioSerializavel{
  private readonly localStorage: Storage;

  private readonly tarefas: Tarefa[];

  constructor() {
    this.localStorage = window.localStorage;

    this.tarefas = this.selecionarTodos();
  }

  public gravar(): void {
    const tarefasJsonString = JSON.stringify(this.tarefas);

    this.localStorage.setItem("tarefas", tarefasJsonString);
  }

  inserir(registro: Tarefa): void {
    this.tarefas.push(registro);
    this.gravar();
  }
  selecionarTodos(): Tarefa[] {
    const dados = this.localStorage.getItem("tarefas");

    if (!dados)
      return [];

    return JSON.parse(dados);
  }

}