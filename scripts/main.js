
// Global consts

const form = document.getElementById('main-form');
const displayedFullname = document.getElementById('displayedFullname');
const displayedEmailaddress = document.getElementById('displayedEmailaddress');





const inputFile = document.getElementById('inputFile');
const dropArea = document.getElementById('dropArea');

//Imports from scripts folder

import { updateUI } from "./updateUI.js";
import { validateForm } from "./validateForm.js";
import { imageHandler , inputtoClick } from "./imageHandler.js";

/*Necesito una funcion que me ayude a cargar la imagen y mostrarla en el tag de image en HTML*/


const submitForm = (e)=>{
  e.preventDefault()

  let fullName = document.getElementById('fullName').value.trim();
  let emailAddress = document.getElementById('emailAddress').value.trim();
  let githubUser = document.getElementById('githubUser').value.trim();

  validateForm(emailAddress);
  updateUI(fullName,emailAddress,githubUser);

}

form.addEventListener('submit', submitForm);


inputtoClick(inputFile);
imageHandler()
