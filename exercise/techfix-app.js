"use strict";

const frm = document.querySelector("form");
const inUser = document.querySelector("#inCliente");
const inputValueOrder = document.querySelector(".order-value");
const selectOrder = document.querySelector("#inMenu");
const totalIncome = document.querySelector(".total-income-value");

const carrinho = [];

const ordensDeServico = [
  { id: userId },
  { cliente: inUser.value },
  { aparelho: inAparelho.value },
  {
    servico: {
      id: 0,
      ordem: "Selecione um serviço",
      valor: 0.0,
      id: 1,
      ordem: "Limpeza Básica",
      valor: 50.0,
      id: 2,
      ordem: "Limpeza Profunda",
      valor: 100.0,
      id: 3,
      ordem: "Troca de Analógico",
      valor: 150.0,
      id: 4,
      ordem: "Reparo de Placa",
      valor: 200.0,
      id: 5,
      ordem: "Calibragem de Sensor",
      valor: 250.0,
      id: 6,
      ordem: "Manutenção de Televisor",
      valor: 300.0,
    },
  },
  { status: "Pendente" },
];

const formatador = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const handleOrderValue = (id) => {
  const order = ordensDeServico[2].servico.find((order) => order.id === Number(id));
  return order ? formatador.format(order.value) : "R$ 0,00";
};

selectOrder.addEventListener("change", (event) => {
  const id = event.target.value;
  inputValueOrder.innerHTML = handleOrderValue(id);
  
//   inputValueOrder.innerHTML = handleOrderValue(event.target.value);
});
inputValueOrder.innerHTML = handleOrderValue(selectOrder.value);

const formatName = (name) => {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
};
console.log(carrinho);

frm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cliente = formatName(ordensDeServico[1].cliente);

  inUser.focus();
  event.target.reset();
  console.log(carrinho);
});
