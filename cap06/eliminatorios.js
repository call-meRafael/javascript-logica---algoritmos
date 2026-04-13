"use strict";

const frm = document.querySelector("form");
const getClub = document.querySelector("#inClube");
const btnAdd = document.querySelector("#btnAdd");
const msgAlert = document.querySelector("pre");

const clubes = [];

function handleClick(e) {
  e.preventDefault();
  console.log("click", e.target);
}

// Crie o primeiro eventListener relativo ao formulário ou ao botão Add.
frm.addEventListener("submit", handleClick => {
  handleClick.preventDefault();
  const clubName = getClub.value;
  if (!clubes.includes(clubName)) {

    return clubName.length < 4 || clubName.length > 20
      ? (msgAlert.innerHTML = `<p>O nome do clube deve conter entre 4 e 20 caracteres!</p>`)
      : clubes.push(clubName)
    ;
  } else {

    msgAlert.innerHTML = `<p>O clube "${clubName}" já está cadastrado!</p>`;
  }
  
  

  getClub.value = '';
  const lista = clubes.map((clube, i) => `<li>Clube na posição ${i + 1}: ${clube}</li>`).join('');
  msgAlert.innerHTML = `<ul>${lista}</ul>`;
});

console.log(clubes);
