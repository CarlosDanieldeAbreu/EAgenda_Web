import { EntidadeBase } from "../shared/entidadeBase.model.js";
export class Tarefa extends EntidadeBase {
    constructor(descricao, prioridade, id) {
        super();
        if (id) {
            this.id = id;
        }
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.dataCriacao = new Date();
    }
}
