'use strict';

const frm = document.querySelector('form');
const inputValueOrder = document.querySelector('.order-value');
const selectOrder = document.querySelector('#inMenu');

const values = [
    { id: 1, service: 'Limpeza Básica', value: 50.00 },
    { id: 2, service: 'Limpeza Profunda', value: 100.00 },
    { id: 3, service: 'Troca de Analógico', value: 150.00 },
    { id: 4, service: 'Reparo de Placa', value: 200.00 },
    { id: 5, service: 'Calibragem de Sensor', value: 250.00 },
    { id: 6, service: 'Manutenção de Televisor', value: 300.00 }
];




const handleOrderValue = (value) => {
    switch (value) {
        case '1':
            return `R$ ${values[0].value.toFixed(2).replace('.', ',')}`;
        case '2':
            return `R$ ${values[1].value.toFixed(2).replace('.', ',')}`;
        case '3':
            return `R$ ${values[2].value.toFixed(2).replace('.', ',')}`;
        case '4':
            return `R$ ${values[3].value.toFixed(2).replace('.', ',')}`;
        case '5':
            return `R$ ${values[4].value.toFixed(2).replace('.', ',')}`;
        case '6':
            return `R$ ${values[5].value.toFixed(2).replace('.', ',')}`;
        default:
            return 0;

    }
}

selectOrder.addEventListener('change', (event) => {
    inputValueOrder.innerHTML = handleOrderValue(event.target.value);
})



