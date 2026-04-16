"use strict";

// Gere um programa que leia nome e número de acertos de candidatos inscritos em um concurso.
//Liste os dados a cada inclusão. Ao clicar no botão 'Aprovados 2ª Fase, o programa deve ler o número de acertos para aprovação dos candidatos para a segunda fase do concurso.
// O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Deve também exibir os candidatos em ordem decrescente de número de acertos.

const frm = document.querySelector("form");
const getName = document.querySelector("#inCandidato");
const getNumbr = document.querySelector("#inAcertos");
const invalidState = document.querySelector('.invalid-state');

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



// Função responsável por colher os dados do formulário e adicionar o candidato à lista.
const getData = (event) => {
  event.preventDefault();
  
  const nome = getName.value;
  const usuario = formatNome(nome);
  const acertos = Number(getNumbr.value);

  
  
  
  if (usuario.length < 3 || usuario.length > 15) {
    event.target.reset();// Segundo reset para limpar entrada pós erro.
    return alert('O nome do candidato deve conter entre 3 e 15 caracteres!');
  }
  
  if (getNumbr.value < 0) {
    return alert('O número de acertos não pode ser negativo!');
  }


  const candidato = aprovados.find((candidato) => candidato.candidato === usuario);
  // Verifica se há duplicidade de candidatos.
  if (candidato) return alert('Candidato já inserido!');
  
  
  aprovados.push({ candidato: usuario, acertos: acertos });
  console.log(aprovados);

  event.target.reset(); // Limpa o formulário.
};

// Ouvinte do evento de envio do formulário.
frm.addEventListener("submit", getData);

// Checa se o nome do candidato é válido impedindo a inserção de caracteres não numéricos.
getName.addEventListener('input', () => {
  if (/\d/.test(getName.value)) {
    getName.classList.add('error-state');
    getName.style.outline = 'none';
    invalidState.classList.remove('no-display');
  } else {
    getName.classList.remove('error-state');
    invalidState.classList.add('no-display');
  }
})



