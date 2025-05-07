const tags = {
    form : document.querySelector('form'),
    dropArea : document.getElementById('dropArea'),
    imageInput : document.getElementById('avatar'),
    fullName: document.getElementById('userName'),
    userEmail: document.getElementById('userEmail'),
    userGitHub: document.getElementById('githubUser'),
    submitBtn : document.querySelector('button'),
    userFullName: document.getElementById('user-full-name'),
    newUserName: document.querySelectorAll('span')[5],
    userEmailAddress :document.getElementById('user-email-address'),
    gitHubUserNickName : document.getElementById('user-github'),
    avatar : document.getElementById('avatar'),
    avatarImage : document.getElementById('avatarImage'), 
    events : ['dragleave','dragover','dragenter','drop'],
    formSection : document.getElementById('classSection'),
    ticketSection : document.getElementById('ticketSection'),
    backHomeBtn: document.getElementById('backHome'), 
}

const {form, dropArea ,imageInput , fullName, userEmail, userGitHub, submitBtn,userFullName, userEmailAddress, gitHubUserNickName, avatar, avatarImage, events, formSection, ticketSection, backHomeBtn } = tags;

let imageUploaded = false;

const submitForm = (e)=>{

    e.preventDefault()

    //Get user's data from imputs
    let submitedName = fullName.value.trim();
    let submitedEmail = userEmail.value.trim();
    let submiteduserGitHub = userGitHub.value.trim();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    


    if(!imageUploaded){
        alert('Add a valid image');
        return
    }

    /*
    if(!submitedName || !submitedEmail || !submiteduserGitHub === '' ){
        alert('Incomplete information, please provide information to proceed');
    } else if(!emailRegex.test(submitedEmail)){
        alert('Ivalid email address');
    
    }else{
        //Update UI
        userEmailAddress.textContent = submitedEmail;
        userFullName.textContent = submitedName;
        gitHubUserNickName.textContent = submiteduserGitHub;
        document.querySelectorAll('span')[5].textContent = submitedName;
        formSection.style.display = 'none'
        ticketSection.style.display = 'flex';
    }
*/ 


    

    if (submitedName === ''){
        alert('Information is incomplete, provide a valid name');  
    } else if(!emailRegex.test(submitedEmail)){
        alert('Your email address is invalid')
    } else if(submiteduserGitHub === ''){
        alert('Provide a valid username');
    } else{
        //Update UI
        userEmailAddress.textContent = submitedEmail;
        userFullName.textContent = submitedName;
        gitHubUserNickName.textContent = submiteduserGitHub;
        document.querySelectorAll('span')[5].textContent = submitedName;
        formSection.style.display = 'none'
        ticketSection.style.display = 'flex';
    }

    form.reset()
    userEmailAddress.value = "";
    userFullName.value = "";
    gitHubUserNickName.value = "";
    imageUploaded = false;

}

const displayImage = (file)=>{
    
    if(file && file.type.startsWith('image/')){

        let reader = new FileReader()
        reader.onload = ()=>{
          avatarImage.src = reader.result;
          imageUploaded = true
        }
        
        reader.readAsDataURL(file);
        
    } else{
        alert('Select an image');
    }

}

dropArea.addEventListener('click', ()=>{
    imageInput.click();
})

dropArea.addEventListener('change', (e)=>{
    
    let file = imageInput.files[0]; 
    
    displayImage(file);
})

events.forEach((event)=>{

    dropArea.addEventListener(event, (e)=>{

        e.preventDefault();
        e.stopPropagation()

        if(event === 'drop'){
            let file = e.dataTransfer.files[0];

            displayImage(file);
        }
        
    })
})




form.addEventListener('submit', submitForm);

backHomeBtn.addEventListener('click', ()=>{
    ticketSection.style.display = 'none';
    formSection.style.display = 'flex';
})

