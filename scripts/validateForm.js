const ticketSection = document.getElementById('ticketSection');


export const validateForm = (emailAddress)=>{

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailAddressInput = document.getElementById('emailAddress');
  let emailerrorMessage = document.getElementById('email-error-message')

  if(!emailRegex.test(emailAddress)){
    emailAddressInput.classList.add('email-error');
    emailerrorMessage.style.display = 'flex'
    console.log('Add a valid email address')
  } else if (emailAddress === '') {
    console.log('Email address cannot be empty')
  }
  else{
    ticketSection.style.display = 'flex';
  }
}