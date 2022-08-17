import { Prioridade } from "./prioridade.enum.js";
import { Tarefa } from "./tarefa.model.js";
import { TarefaRepositoryLocalStorage } from "./tarefa.repository.LocalStorage.js";
class TarefaPaginaCadastro {
    constructor(repositorioTarefas, id) {
        this.repositorioTarefas = repositorioTarefas;
        this.configurarElementos();
        if (id) {
            this.idSelecionado = id;
            const tarefaSelecionada = this.repositorioTarefas.selecionarPorId(id);
            if (tarefaSelecionada)
                this.preencherFormulario(tarefaSelecionada);
        }
    }
    preencherFormulario(tarefaSelecionada) {
        this.txtDescricao.value = tarefaSelecionada.descricao;
        /*
        switch(tarefaSelecionada.prioridade){
          case Prioridade.Baixa:
            this.selectPrioridade = document.querySelector("option[value='Baixa']") as HTMLSelectElement;
            break;
          case Prioridade.Normal:
            this.selectPrioridade = document.querySelector("option[value='Normal']") as HTMLSelectElement;
            break;
          case Prioridade.Alta:
            this.selectPrioridade = document.querySelector("option[value='Alta']") as HTMLSelectElement;
            this.selectPrioridade.options[this.selectPrioridade.selectedIndex];
            break;
        }
        */
        this.selectPrioridade = document.getElementById('inputGroupSelectCategoria');
        switch (tarefaSelecionada.prioridade) {
            case Prioridade.Baixa:
                this.selectPrioridade.selectedIndex = 0;
                break;
            case Prioridade.Normal:
                this.selectPrioridade.selectedIndex = 1;
                break;
            case Prioridade.Alta:
                this.selectPrioridade.selectedIndex = 2;
                break;
        }
    }
    configurarElementos() {
        this.txtDescricao = document.getElementById("titulo");
        this.btnSalvar = document.getElementById("btnSalvar");
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        const tarefa = this.obterDadosFormulario();
        if (!this.idSelecionado)
            this.repositorioTarefas.inserir(tarefa);
        else
            this.repositorioTarefas.editar(tarefa.id, tarefa);
        window.location.href = "tarefa.html";
    }
    obterDadosFormulario() {
        const descricao = this.txtDescricao.value;
        const prioridade = this.obterPrioridadeSelecionada();
        let tarefa = null;
        if (!this.idSelecionado)
            tarefa = new Tarefa(descricao, prioridade);
        else
            tarefa = new Tarefa(descricao, prioridade, this.idSelecionado);
        return tarefa;
    }
    obterPrioridadeSelecionada() {
        this.selectPrioridade = document.getElementById('inputGroupSelectCategoria');
        this.selectPrioridade.options[this.selectPrioridade.selectedIndex].value;
        return this.selectPrioridade.value;
    }
}
const pararms = new URLSearchParams(window.location.search);
const id = pararms.get("id");
new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage(), id);
