const prvni = document.querySelector('#Name');
const druhy = document.querySelector('#Surname');
const treti = document.querySelector('#Mail');
const ctvrty = document.querySelector('#age');
const paty = document.querySelector('option');

const odeslat = document.querySelector('button');

odeslat.addEventListener('click', () => {
    console.log(prvni.value, druhy.value, treti.value, ctvrty.value, paty.innerText)
})
