import { IPaginaFormulario } from "../shared/pagina.create.interface.js";
import { IPaginaHTML } from "../shared/pagina.interface.js";
import { IRepositorio } from "../shared/repositorio.interface.js";
import { Contato } from "./contato.model.js";
import { ContatoRepositoryLocalStorage } from "./contato.repository.LocalStorage.js";

class ContatoPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
  private txtNome: HTMLInputElement;
  private txtEmail: HTMLInputElement;
  private txtTelefone: HTMLInputElement;
  private txtEmpresa: HTMLInputElement;
  private txtCargo: HTMLInputElement;
  private btnSalvar: HTMLButtonElement;

  constructor(private repositorioContatos: IRepositorio<Contato>) {

    this.configurarElementos();
  }

  configurarElementos(): void {
    this.txtNome = document.getElementById("nome") as HTMLInputElement;
    this.txtEmail = document.getElementById("email") as HTMLInputElement;
    this.txtTelefone = document.getElementById("telefone") as HTMLInputElement;
    this.txtEmpresa = document.getElementById("empresa") as HTMLInputElement;
    this.txtCargo = document.getElementById("cargo") as HTMLInputElement;
    this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

    // operador discard _
    this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
  }

  gravarRegistros(): void {
    const novoContato = new Contato(this.txtNome.value, this.txtEmail.value, this.txtTelefone.value, this.txtEmpresa.value, this.txtCargo.value);

    this.repositorioContatos.inserir(novoContato);

    // método para redirecionar usuario
    window.location.href = "../contato/contato.html";
  }
}

new ContatoPaginaCadastro(new ContatoRepositoryLocalStorage());