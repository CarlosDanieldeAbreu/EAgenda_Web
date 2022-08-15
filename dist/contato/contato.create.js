import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.LocalStorage.js";
class ContatoPaginaCadastro {
    constructor(repositorioContatos) {
        this.repositorioContatos = repositorioContatos;
        this.configurarElementos();
    }
    configurarElementos() {
        this.txtNome = document.getElementById("nome");
        this.txtEmail = document.getElementById("email");
        this.txtTelefone = document.getElementById("telefone");
        this.txtEmpresa = document.getElementById("empresa");
        this.txtCargo = document.getElementById("cargo");
        this.btnSalvar = document.getElementById("btnSalvar");
        // operador discard _
        this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
    }
    gravarRegistros() {
        const novoContato = new Contato(this.txtNome.value, this.txtEmail.value, this.txtTelefone.value, this.txtEmpresa.value, this.txtCargo.value);
        this.repositorioContatos.inserir(novoContato);
        // método para redirecionar usuario
        window.location.href = "../contato/contato.html";
    }
}
new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage());
