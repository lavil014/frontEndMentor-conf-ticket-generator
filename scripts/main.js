const form = document.getElementById('main-form');
const ticketSection = document.getElementById('ticketSection');
const displayedFullname = document.getElementById('displayedFullname');
const displayedEmailaddress = document.getElementById('displayedEmailaddress');
const nameonTicket = document.getElementById('ticketUser');
const githubonTicket = document.getElementById('ticketGithub');


//Necesito hacer una funcion para que cuando haga submit al form los datos de los inputs se puedan capturar y mostrar en la seccion de el ticket


const updateUI = (fullName,emailAddress,githubUser)=>{

  displayedFullname.innerText = fullName;
  displayedEmailaddress.innerText = emailAddress;
  nameonTicket.innerText = fullName;
  githubonTicket.innerText = githubUser;

}

const validateForm = ()=>{
  
}

const submitForm = (e)=>{
  e.preventDefault()

  let fullName = document.getElementById('fullName').value.trim();
  let emailAddress = document.getElementById('emailAddress').value.trim();
  let githubUser = document.getElementById('githubUser').value.trim();



  console.log({fullName,emailAddress,githubUser});

  ticketSection.style.display = 'flex';
  updateUI(fullName,emailAddress,githubUser);

}

form.addEventListener('submit', submitForm);

