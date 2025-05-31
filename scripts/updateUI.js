const nameonTicket = document.getElementById('ticketUser');
const githubonTicket = document.getElementById('ticketGithub');

export const updateUI = (fullName,emailAddress,githubUser)=>{

  displayedFullname.innerText = fullName;
  displayedEmailaddress.innerText = emailAddress;
  nameonTicket.innerText = fullName;
  githubonTicket.innerText = githubUser;

}

