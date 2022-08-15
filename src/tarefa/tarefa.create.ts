import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.LocalStorage.js";

class TarefaPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
  private txtDescricao: HTMLInputElement;
  private selectPrioridade: HTMLSelectElement;
  private btnSalvar: HTMLButtonElement;

  constructor(private repositorioTarefas: IRepositorio<Tarefa>) {

    this.configurarElementos();
  }

  configurarElementos(): void {
    this.txtDescricao = document.getElementById("titulo") as HTMLInputElement;
    this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;
    this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
  }
  
  gravarRegistros(): void {
    this.selectPrioridade = document.getElementById('inputGroupSelectCategoria') as HTMLSelectElement;
    let prioridadeSelecionada = this.selectPrioridade.options[this.selectPrioridade.selectedIndex].value;
  
    const prioridade = prioridadeSelecionada as Prioridade;
  
    const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);
  
    this.repositorioTarefas.inserir(novaTarefa);
  
    window.location.href = "../tarefa/tarefa.html";
  }
}
new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());