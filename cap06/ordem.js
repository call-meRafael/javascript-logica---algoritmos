"use strict";

const frm = document.querySelector("form");
const getNumber = document.querySelector("#inNumero");
const listaNum = document.querySelector(".nmbr-lst");
const alertMsg = document.querySelector(".alert-msg1");
const verifyBtn = document.querySelector("#inCheck");
const orderList = document.querySelector('.oreder-list');
const errorMsg1 = document.querySelector('.error-msg1');

// ENUNCIADO:
// Elabore um programa que adicione números a um array. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão 'Verirficar Ordem', o programa deve analisar o conteúdo do array e informar se os números então ou não em ordem crescente.

const numeros = [];

const handleAdd = (action) => {
  action.preventDefault();

  const valorNum = getNumber.value;

  if (numeros.includes(valorNum)) {
    alertMsg.textContent = `O número ${valorNum} já existe na lista!`;
    alertMsg.style.color = "red";
    alertMsg.style.fontWeight = "bold";

    setInterval(() => {
      alertMsg.textContent = "";
      alertMsg.textContent = numeros;
      alertMsg.style.color = "black";
    }, 1500);
  } else {
    numeros.push(valorNum);
    alertMsg.textContent = numeros;
    alertMsg.style.fontWeight = "bold";
  }

  action.target.reset();
};

frm.addEventListener("submit", handleAdd);

const handleVerify = (check) => {
  check.preventDefault(); 
};

verifyBtn.addEventListener('click', handleVerify);

// for (let num = 0; num < numeros.length; num++) {
//   if (numeros[num] > numeros[num + 1]) {
//     return "Os números não estão em ordem crescente!";
//   }
// }
