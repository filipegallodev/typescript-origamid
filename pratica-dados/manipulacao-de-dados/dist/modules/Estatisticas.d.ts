export default class Estatisticas {
    private transacoes;
    total: number;
    pagamento: import("./countBy.js").CountList;
    status: import("./countBy.js").CountList;
    semana: {
        Domingo: number;
        Segunda: number;
        Terça: number;
        Quarta: number;
        Quinta: number;
        Sexta: number;
        Sábado: number;
    };
    melhorDia: [string, number];
    constructor(transacoes: Transacao[]);
    private setTotal;
    private setPagamento;
    private setStatus;
    private setSemana;
    private setMelhorDia;
}
