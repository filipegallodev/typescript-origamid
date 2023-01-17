import fetchData from "./modules/fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        const cleanData = data.map((item) => {
            return {
                id: item["ID"],
                nome: item["Nome"],
                valor: item["Valor (R$)"],
                data: item["Data"],
                status: item["Status"],
                formaDePagamento: item["Forma de Pagamento"],
                clienteNovo: item["Cliente Novo"],
                email: item["Email"],
            };
        });
    }
}
handleData();
//# sourceMappingURL=script.js.map