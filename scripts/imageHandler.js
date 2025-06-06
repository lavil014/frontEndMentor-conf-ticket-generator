const dropArea = document.getElementById('dropArea');
const avatarImage = document.getElementById('avatarImage');
const inputFile = document.getElementById('inputFile');
const dropareaMessagerror = document.getElementById('dropareaMessageerror');
const events = ['dragleave','dragover','dragenter','drop'];


export const inputtoClick = (inputFile)=>{
  dropArea.addEventListener('click', ()=>{
    inputFile.click()
  })
}

const manageChangeEvent = (dropArea)=>{
  dropArea.addEventListener('change', ()=>{
  
  let file = inputFile.files[0];
  let fileinKB = (file.size / 1024).toFixed(2);

    if(fileinKB > 500){
      dropareaMessagerror.style.display = 'flex';
    } else{
      displayImage(file);
    }
})
}

events.forEach((event)=>{
  dropArea.addEventListener(event, (e)=>{

    e.preventDefault();
    e.stopPropagation();

    if(event === 'drop'){
     let file = e.dataTransfer.files[0];
     console.log(file)
      displayImage(file);
    } else if(event === 'dragover'){
      dropArea.classList.add('drop-area-dragover-efect');
    } else if(event === 'dragleave'){
      dropArea.classList.remove('drop-area-dragover-efect')
    }
  })
})

const displayImage = (file)=>{
  console.log('My displayImage function is working');


  if(file && file.type.startsWith('image/')){
    let reader = new FileReader()

    reader.onload = ()=>{
      avatarImage.src = reader.result;
    }

    reader.readAsDataURL(file)

  }
}

export const imageHandler = ()=>{
  console.log('My imageHandler function is working');


  manageChangeEvent(dropArea)

 

}

