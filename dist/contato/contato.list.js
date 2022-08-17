import { ContatoRepositoryLocalStorage } from "./contato.repository.LocalStorage.js";
class ContatoPaginaListagem {
    constructor(repositiorioContatos) {
        this.repositiorioContatos = repositiorioContatos;
        this.configurarElementos();
        this.atualizarTabela();
    }
    configurarElementos() {
        this.tabela = document.getElementById("tabela");
    }
    atualizarTabela() {
        const contatos = this.repositiorioContatos.selecionarTodos();
        let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];
        contatos.forEach(contato => {
            const novaLinha = corpoTabela.insertRow();
            Object.values(contato).forEach((valor) => {
                const novaCelula = novaLinha.insertCell();
                novaCelula.innerText = valor;
            });
            const celulaBotoes = novaLinha.insertCell();
            const btnEditar = document.createElement("a");
            btnEditar.innerText = "Editar";
            btnEditar.className = "btn btn-outline-success me-1";
            btnEditar.addEventListener("click", () => {
                const idSelecionado = novaLinha.cells[0].innerText;
                window.location.href = `contato.html?id=${idSelecionado}`;
            });
            const btnExcluir = document.createElement("a");
            btnExcluir.innerText = "Excluir";
            btnExcluir.className = "btn btn-outline-danger";
            btnExcluir.addEventListener("click", () => {
                const idSelecionado = contato.id;
                this.repositiorioContatos.excluir(idSelecionado);
                window.location.reload();
            });
            celulaBotoes.appendChild(btnEditar);
            celulaBotoes.appendChild(btnExcluir);
        });
    }
}
new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());
