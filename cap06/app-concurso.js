"use strict";

// Gere um programa que leia nome e número de acertos de candidatos inscritos em um concurso.
//Liste os dados a cada inclusão. Ao clicar no botão 'Aprovados 2ª Fase, o programa deve ler o número de acertos para aprovação dos candidatos para a segunda fase do concurso.
// O programa deve, então, exibir os candidatos aprovados, ou seja, apenas os que obtiveram nota maior ou igual à nota informada. Deve também exibir os candidatos em ordem decrescente de número de acertos.

const frm = document.querySelector("form");
const getName = document.querySelector("#inCandidato");
const getNumbr = document.querySelector("#inAcertos");
const invalidState = document.querySelector(".invalid-state");
const listAllBtn = document.querySelector("#list-btn");
const aprovedListbtn = document.querySelector("#phase2-btn");
const closeBtn = document.querySelector("#close-btn");
const finalCloseBtn = document.querySelector(".finalClose-btn");
const userTable = document.querySelector(".lista-total");
const listFormated = document.querySelector(".list-box");
const maxGrade = document.querySelector(".nota-maxima");
const usersAproved = document.querySelector(".aproved-list");
const aprovedBox = document.querySelector(".aproved-box");

const listaCandidatos = [];
const notaParaAprovacao = 300;
const notaMaxima = 400;

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

  if (usuario.length < 3 || usuario.length > 25) {
    event.target.reset(); // Segundo reset para limpar entrada pós erro.
    return alert("O nome do candidato deve conter entre 3 e 25 caracteres!");
  }

  if (getNumbr.value < 0) {
    return alert("O número de acertos não pode ser negativo!");
  } else if (getNumbr.value > notaMaxima) {
    return alert("O número de acertos não pode ser maior que 400!");
  }

  const candidato = aprovados.find(
    (candidato) => candidato.candidato === usuario,
  );
  // Verifica se há duplicidade de candidatos.
  if (candidato) return alert("Candidato já inserido!");

  listaCandidatos.push({ candidato: usuario, acertos: acertos });
  console.log(listaCandidatos);

  event.target.reset(); // Limpa o formulário.
  getName.focus();
};

// Ouvinte do evento de envio do formulário.
frm.addEventListener("submit", getData);

// Checa se o nome do candidato é válido impedindo a inserção de caracteres não numéricos.
getName.addEventListener("input", () => {
  if (/\d/.test(getName.value)) {
    getName.classList.add("error-state");
    getName.style.outline = "none";
    invalidState.classList.remove("no-display");
  } else {
    getName.classList.remove("error-state");
    invalidState.classList.add("no-display");
  }
});

const formatListaCandidatos = (candidatos) => {
  const lista = candidatos
    .map(
      (user, i) =>
        `<li>Candidato ${i + 1}: <em>${user.candidato}</em> - <strong>${user.acertos}</strong> acertos</li>`,
    )
    .join("");
  userTable.innerHTML = lista;
};

// Ouvinte do evento de clicar no botão de listar todos.
listAllBtn.addEventListener("click", () => {
  // Verifica se houve inserção de dados.
  if (listaCandidatos.length < 1) {
    return alert("Não há candidatos para listar!");
  }
  formatListaCandidatos(listaCandidatos);

  listFormated.classList.remove("no-display");
});

// ouvinte do evento de clicar no botão fechar.
closeBtn.addEventListener("click", () => {
  listFormated.classList.add("no-display");
});

// Ouvinte do evento de clique para fechar a lista de candidatos aprovados.
finalCloseBtn.addEventListener("click", () => {
  aprovedBox.classList.add("no-display");
});

// Ouvinte do evento de clicar no botão de listar candidatos aprovados para a segunda fase.
aprovedListbtn.addEventListener("click", () => {
  
  // Checa se houve inserção de dados.
  if (listaCandidatos.length < 1) {
    return alert("Não há candidatos para listar!");
  }
  
  aprovedBox.classList.remove("no-display");

  // Exibe a nota máxima do exame.
  maxGrade.textContent = `Nota máxima: ${notaMaxima}`;

  // Fecha a lista de candidatos para exibição.
  listFormated.classList.add("no-display");

  // Ordena os candidatos por número de acertos de forma decrescente.
  const listaAprovados = listaCandidatos
    .filter((candidato) => candidato.acertos >= notaParaAprovacao)
    .sort((a, b) => b.acertos - a.acertos);

  formatListaCandidatos(listaAprovados);

  usersAproved.innerHTML = listaAprovados
    .map(
      (user, i) =>
        `<li>Aprovado ${i + 1}: <em>${user.candidato}</em> - <strong>${user.acertos}</strong> acertos</li>`,
    )
    .join("");
});
