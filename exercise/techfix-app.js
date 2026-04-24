"use strict";

// Você terá um único array principal chamado ordensDeServico. Cada objeto dentro dele deve ter: id (gerado dinamicamente), cliente, aparelho, servico, valor, e status (que começa como "Pendente").

const frm = document.querySelector("form");
const inUser = document.querySelector("#inCliente");
const inputValueOrder = document.querySelector(".order-value");
const selectOrder = document.querySelector("#inMenu");
const totalIncome = document.querySelector(".total-income-value");

const carrinho = [];

const ordensDeServico = 

const formatador = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


const formatName = (name) => {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
};
