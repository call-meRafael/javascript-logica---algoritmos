"use strict";

// Gere um programa que leia nome e número de acertos de candidatos inscritos em um concurso.
//Liste os dados a cada inclusão. Ao clicar no botão 'Aprovados 2ª Fase, o programa deve ler o número de acertos para aprovação dos candidatos para a segunda fase do concurso.
// O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Deve também exibir os candidatos em ordem decrescente de número de acertos.

const frm = document.querySelector("form");
const getName = document.querySelector("#inCandidato");
const getNumbr = document.querySelector("#inAcertos");

const aprovados = [];

const formatNome = (nome) => {
  const candidato = nome
    .trim()
    .toLowerCase()
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
    
  return candidato;
};


const getData = (event) => {
  event.preventDefault();

  const usuario = formatNome(getName.value);

  if (getName.value.length < 3 || getName.value.length > 15) {
    return alert('O nome do candidato deve conter entre 3 e 15 caracteres!');
  }

  formatNome(getName.value);
  aprovados.push(usuario);

  event.target.reset();
};

frm.addEventListener("submit", getData);
console.log(aprovados);


