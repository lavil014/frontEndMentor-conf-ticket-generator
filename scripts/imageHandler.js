const dropArea = document.getElementById('dropArea');
const avatarImage = document.getElementById('avatarImage');
const inputFile = document.getElementById('inputFile');
const dropareaMessagerror = document.getElementById('dropareaMessageerror');


export const inputtoClick = (inputFile)=>{
  dropArea.addEventListener('click', ()=>{
    inputFile.click()
  })
}

const managedropArea = (dropArea)=>{
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


  managedropArea(dropArea)

 

}

