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
        });
    }
}
new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());
