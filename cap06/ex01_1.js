'use strict';

const frm = document.querySelector('form');
const respNome = document.querySelector('span');
const respLista = document.querySelector('pre');

const pacientes = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = frm.inPaciente.value
    pacientes.push(nome);
    let lista = '';

    const atualizarPacientes = pacientes.map(({ nome, lista }, i) => {
        return ` ${nome} - ${lista[i]}`
    });

    respNome.innerHTML = nome;
    respLista.innerHTML = lista;
    console.log(atualizarPacientes);

})