export class ContatoRepositoryLocalStorage {
    constructor() {
        this.localStorage = window.localStorage;
        this.contatos = this.selecionarTodos();
    }
    gravar() {
        const contatosJsonString = JSON.stringify(this.contatos);
        this.localStorage.setItem("contatos", contatosJsonString);
    }
    inserir(registro) {
        this.contatos.push(registro);
        this.gravar();
    }
    selecionarTodos() {
        const dados = this.localStorage.getItem("contatos");
        if (!dados)
            return [];
        return JSON.parse(dados);
    }
}
