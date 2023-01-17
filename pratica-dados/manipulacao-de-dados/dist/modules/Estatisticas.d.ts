export default class Estatisticas {
    private transacoes;
    total: number;
    pagamento: import("./countBy.js").CountList;
    status: import("./countBy.js").CountList;
    constructor(transacoes: Transacao[]);
    private setTotal;
    private setPagamento;
    private setStatus;
}
