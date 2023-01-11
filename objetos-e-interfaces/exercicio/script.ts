// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome: string;
  email: string;
  cpf: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

const form = document.querySelector("form");

function getFormElements() {
  const nome = document.querySelector<HTMLInputElement>("#nome");
  const email = document.querySelector<HTMLInputElement>("#email");
  const cpf = document.querySelector<HTMLInputElement>("#cpf");

  return { nome, email, cpf };
}

function getFormValues() {
  const { nome, email, cpf } = getFormElements();

  if (nome && email && cpf) {
    if (nome.value || email.value || cpf.value) {
      handleFormData({
        nome: nome.value,
        email: email.value,
        cpf: cpf.value,
      });
    }
  }
}

function handleFormData(data: UserData) {
  localStorage.setItem("user-data", JSON.stringify(data));
}

function isUserData(value: unknown): value is UserData {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "email" in value &&
    "cpf" in value
  ) {
    return true;
  }

  return false;
}

function getLocalStorageData() {
  const localData = localStorage.getItem("user-data");
  if (localData) {
    const data = JSON.parse(localData);

    if (isUserData(data)) fillFormInput(data);
  }
}
getLocalStorageData();

function fillFormInput(data: UserData) {
  const { nome, email, cpf } = getFormElements();

  if (nome && email && cpf) {
    nome.value = data.nome;
    email.value = data.email;
    cpf.value = data.cpf;
  }
}

form?.addEventListener("keyup", getFormValues);
