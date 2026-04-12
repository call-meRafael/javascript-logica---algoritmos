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
  clubes.push(clubName);

  

  
});

console.log(clubes);
