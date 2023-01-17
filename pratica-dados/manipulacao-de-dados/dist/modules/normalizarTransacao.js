export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: transacao.Data,
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: 0,
        pagamento: transacao["Forma de Pagamento"],
        movo: Boolean(transacao["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map