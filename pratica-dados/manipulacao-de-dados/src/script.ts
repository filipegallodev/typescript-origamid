import fetchData from "./modules/fetchData.js";

type TransacaoPagamento = "Cartão de Crédito" | "Boleto";
type TransacaoStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";

interface TransacaoAPI {
  Nome: string;
  ID: number;
  Data: string;
  Status: TransacaoStatus;
  Email: string;
  ["Valor (R$)"]: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  ["Cliente Novo"]: number;
}

interface Transacao {
  nome: string;
  id: number;
  data: string;
  status: string;
  email: string;
  valor: string;
  formaDePagamento: string;
  clienteNovo: boolean;
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );

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
