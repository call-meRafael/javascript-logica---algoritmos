"use strict";

const frm = document.querySelector("form");
const getClub = document.querySelector("#inClube");
const msgAlert = document.querySelector("pre");
const msgAlert2 = document.querySelector("span");
const listBtn = document.querySelector("#btnListar");
const clubsInserted = document.querySelector(".inserir-clubes");
const table = document.querySelector(".tabela-final");


let clubes = [];

// Função principal de ação principal do formulário, responsavel por validar o nome do clube, verificar se já foi adicionado um clube com o mesmo nome e, por fim, adicionar o nome do clube ao array de clubes.
const handleMainAction = (action) => {
  action.preventDefault();

  // Remove os espaços em branco do início e do fim do campo de entrada, caso existam, e formata o nome do clube para que a primeira letra de cada palavra seja maiúscula.
  const textValue = getClub.value
    .trim()
    .toLowerCase()
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
  // Verifica se o nome do clube possui no mínimo 4 caracteres.
  if (textValue.length < 4)
    return (msgAlert.innerHTML = `<p>O nome do clube deve ter no mínimo 4 caracteres!</p>`);

  // Verifica se o nome do clube inserido pelo usuário já foi adicionado ao arrays de clubes.
  clubes.includes(textValue)
    ? (msgAlert2.innerHTML = `<p>O clube "${textValue}" já foi adicionado, tente outro clube!</p>`)
    : clubes.push(textValue);

  action.target.reset();
  msgAlert.innerHTML = clubes;
};

// Evento para o campo de entrada do mome do clube no formulário.
frm.addEventListener("submit", handleMainAction);

// Função encarregada de gerar a listagem de clubes inseridos no array de clubes.
const handleClubList = (clubs) => {
  listBtn.addEventListener("click", () => {
    clubsInserted.innerHTML = clubs.map((club, i) => `<li>Clube número ${i + 1}: ${club}</li>`).join("");
  });
  return clubs;
};


// Função encarregada de gerar a tabela de jogos eliminatórios.
const handleTable = (clubs) => {
  const tableAction = (list) => {
    table.innerHTML = list.map((club) => {
      return `<li>${club[0]} x ${club[club.length - 1]}</li>`;
    })
  }
  return tableAction(clubes);

}

btnMontar.addEventListener('click', handleTable(clubes));

console.log(clubes);
console.log(handleClubList(clubes));
console.log(handleTable(clubes));
