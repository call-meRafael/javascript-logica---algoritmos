"use strict";

// Você terá um único array principal chamado ordensDeServico. Cada objeto dentro dele deve ter: id (gerado dinamicamente), cliente, aparelho, servico, valor, e status (que começa como "Pendente").

const frm = document.querySelector("form");
const inUser = document.querySelector("#inCliente");
const inputValueOrder = document.querySelector(".order-value");
const selectOrder = document.querySelector("#inMenu");
const totalIncome = document.querySelector(".total-income-value");

const carrinho = [];
const statusOrder = ['Pendente', 'Concluido'];


const dadosDeServico = JSON.parse(localStorage.getItem("techFix_dados")) || [];

const ordensDeServico = [
  { id: 1, cliente: 'Rafael Araujo', aparelho: 'Notebook', servico: 'Limpeza Profunda', valor: 150, status: statusOrder[0] },
  { id: 2, cliente: 'Milena Araujo', aparelho: 'Smartphone', servico: 'Troca de Tela', valor: 300, status: statusOrder[0] },
  { id: 3, cliente: 'Antonio Carlos', aparelho: 'Smart TV 65"', servico: 'Instalação', valor: 200, status: statusOrder[0] },
  { id: 4, cliente: 'Maria Rocicle', aparelho: 'Air Fryer', servico: 'Limpeza Básica', valor: 50, status: statusOrder[0] },
  { id: 5, cliente: 'Gerson David', aparelho: 'PS4', servico: 'Reparo de HDD', valor: 120, status: statusOrder[0] },
  { id: 6, cliente: 'Ana Paula', aparelho: 'Refrigerador', servico: 'Calibragem do Refrigerador',  valor: 400, status: statusOrder[0] }
];
localStorage.setItem("techFix-dados", JSON.stringify(ordensDeServico));

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

const handleOrders = (id) => {
  const order = ordensDeServico.find((order) => order.id === id);

  const 
}