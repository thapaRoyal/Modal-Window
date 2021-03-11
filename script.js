'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.closed-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal);


for (let i = 0; i < btnsOpenModal.length ; i++){
    console.log(btnsOpenModal[i].textContent);
}
