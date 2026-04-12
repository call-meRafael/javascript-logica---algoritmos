"use strict";

const frm = document.querySelector("form");
const getClub = document.querySelector("#inClube");
const btnAdd = document.querySelector("#btnAdd");
const msgAlert = document.querySelector("pre");

const clubes = [];

// Crie o primeiro eventListener relativo ao formulário ou ao botão Add.
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const clubName = getClub.value;

  if (clubName.length < 4) {
    msgAlert.textContent =
      "Clube inválido. Nomes de clubes devem conter no mínimo 4 caracteres!";
  }

  clubes.includes(clubName)
    ? (msgAlert.textContent = `O clube "${clubName}" já existe!`)
    : clubes.push(clubName);

  getClub.value = "";
});

console.log(clubes);
