"use strict";

const frm = document.querySelector("#data-getter");
const getUser = document.querySelector("#inUser");
const getAparelho = document.querySelector("#inAparelho");
const invalidState = document.querySelector('.invalid-state');
const orderBtn = document.querySelector("#order-btn");

const statusServico = ["Pendente", "Concluido"];
let catalogoDeServicos;
const ordensDeServico = [
  {
    id: "srvc_0",
    nome: "Selecione um serviço",
  },
  {
    id: "srvc_1",
    nome: "Limpeza Básica",
    cliente: "Rafael Araujo",
    aparelho: "Notebook Predator",
    valor: 120,
    status: statusServico[0],
  },
  {
    id: "srvc_2",
    nome: "Limpeza Profunda",
    cliente: "Milena Araujo",
    aparelho: 'Televisor LG 45" smart',
    valor: 215,
    status: statusServico[0],
  },
  {
    id: "srvc_3",
    nome: "Troca de Analógico",
    cliente: "Gerson David",
    aparelho: "Controle PS5",
    valor: 150,
    status: statusServico[0],
  },
];

// Verificação de persistencia de dados no localStorage. Se houver, os dados são carregados; caso contrário, o array é inicializado com os dados padrão e salvo no localStorage.
const dadosSalvos = localStorage.getItem("techFix_dados");
if (dadosSalvos) {
  catalogoDeServicos = JSON.parse(dadosSalvos);
} else {
  catalogoDeServicos = ordensDeServico;
  localStorage.setItem("techfix-dados", JSON.stringify(ordensDeServico));
}

const adicionarServico = (event) => {
    event.preventDefault();

    const user = formatInput(getUser.value);
    const aparelho = formatInput(getAparelho.value);
    const validation = /\d/.test(getUser.value);
    
    // Checa se o nome do usuário contém caracteres suficientes para ser válido.
    if (user.length < 3 || user.length > 20) {
        event.target.reset();
        getUser.focus();
        return alert("O nome do cliente deve conter entre 3 e 20 caracteres!");
    }

    event.target.reset();
    getUser.focus();
}

frm.addEventListener('submit', adicionarServico);

// Verifica se o nome do cliente é válido, impedindo a inserção de caracteres não numéricos.
getUser.addEventListener('input', () => {
    if (/\d/.test(getUser.value)) {
        getUser.classList.add('error-state');
        invalidState.classList.remove('no-display');
        getUser.style.transition = '.4s ease';
        invalidState.style.transition = '.4s ease';
    } else {
        getUser.classList.remove('error-state');
        invalidState.classList.add('no-display');
        getUser.style.transition = '.4s ease';
        invalidState.style.transition = '.4s ease';
    }
})

// Auxiliar para formatação de nomes, garantindo que sejam armazenados e exibidos de forma consistente e padronizada.
const formatInput = (text) => {
  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
};

// Auxiliar para formatação de valores, garante um retorno de preço adequado ao que o usuário está familiazado, além de facilitar a manipulação de valores numéricos para cálculos e armazenamento.
const formatCurrency = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

frm.addEventListener("submit", (event) => {
  event.preventDefault();
});
