
// Global consts

const form = document.getElementById('main-form');
const ticketSection = document.getElementById('ticketSection');
const displayedFullname = document.getElementById('displayedFullname');
const displayedEmailaddress = document.getElementById('displayedEmailaddress');



//Imports from modules

import { updateUI } from "./updateUI.js";

//Necesito hacer una funcion para que cuando haga submit al form los datos de los inputs se puedan capturar y mostrar en la seccion de el ticket

const validateForm = (emailAddress)=>{

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailAddressInput = document.getElementById('emailAddress');

  if(!emailRegex.test(emailAddress)){
    emailAddressInput.classList.add('.email-error');
  } else{
    ticketSection.style.display = 'flex';
  }

 
}

const submitForm = (e)=>{
  e.preventDefault()

  let fullName = document.getElementById('fullName').value.trim();
  let emailAddress = document.getElementById('emailAddress').value.trim();
  let githubUser = document.getElementById('githubUser').value.trim();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  validateForm(emailAddress);
  updateUI(fullName,emailAddress,githubUser);

}

form.addEventListener('submit', submitForm);

