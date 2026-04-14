"use strict";

const frm = document.querySelector("form");
const getNumber = document.querySelector("#inNumero");
const listaNum = document.querySelector('.nmbr-lst');
const alertMsg = document.querySelector('.alert-msg1');

// ENUNCIADO:
// Elabore um programa que adicione números a um array. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão 'Verirficar Ordem', o programa deve analisar o conteúdo do array e informar se os números então ou não em ordem crescente.

const numeros = [];

const handleAdd = (numero) => {
  
  

  const valorNum = getNumber.value;

  if (numeros.includes(valorNum)) {

    return alertMsg.textContent = `O número ${valorNum} já existe na lista!`;

    
  }  else {
    numeros.push(valorNum);
  }

  

  for (let num = 0; num < numeros.length; num++) {
    // Exibe a lista de números na tela a cada inclusão.
    listaNum.innerHTML += `<li>${numeros[num]}</li>`;

  }

  
};

frm.addEventListener('submit', handleAdd);
console.log(handleAdd(numeros));

// for (let num = 0; num < numeros.length; num++) {
//   if (numeros[num] > numeros[num + 1]) {
//     return "Os números não estão em ordem crescente!";
//   }
// }