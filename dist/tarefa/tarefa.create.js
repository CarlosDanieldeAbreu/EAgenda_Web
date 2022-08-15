import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.LocalStorage.js";
class TarefaPaginaCadastro {
    constructor(repositorioTarefas) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
    }
    configurarElementos() {
        this.txtDescricao = document.getElementById("titulo");
        this.btnSalvar = document.getElementById("btnSalvar");
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        this.selectPrioridade = document.getElementById('inputGroupSelectCategoria');
        let prioridadeSelecionada = this.selectPrioridade.options[this.selectPrioridade.selectedIndex].value;
        const prioridade = prioridadeSelecionada;
        const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);
        this.repositorioTarefas.inserir(novaTarefa);
        window.location.href = "../tarefa/tarefa.html";
    }
}
new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());
