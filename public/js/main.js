import { passwords, saveToStorage, removePassword} from "./password.js";









var openPasswords = document.querySelector('.openPasswords');

var right = document.querySelector('.right')
var openAP = document.querySelector('.openAddP');

function displayPasswords(){
  console.log(passwords);
  var passwordsHTML = '';
    
  for(let i = 0; i < passwords.length; i++){
   
      const password = passwords[i]
     
       var passwordsHTML = passwordsHTML + 
      `
      
       <div class="eachPassword">
          <div>
              <h2>${password.site}</h1>
              <p>UserName: ${password.userName} <br> Email: ${password.email} <br>
              Password: ${password.password} </p>
          </div>
           <div class="buttons">
                <button class="editBtn" data-site-id="${password.site}">Edit</button>
                <button class="deleteBtn"  data-site-id="${password.site}">Delete</button>
              </div>
  
       </div>
      
          
      `
    
    
    
  }
  
  right.innerHTML = passwordsHTML


  var deleteBtn = document.querySelectorAll('.deleteBtn')
  deleteBtn.forEach((button) => {
   button.addEventListener('click', ()=> {
   const buttonId = button.dataset.siteId
    const newPasswords = []
    for(let i=0; i<passwords.length; i++){
     console.log(passwords[i].site);
     
     if(passwords[i].site !== buttonId ){
       newPasswords.push(passwords[i])
     
     }
       
      
    
     
    }

    removePassword(newPasswords, displayPasswords);
    
    
    
   
  })
  })
  var editModal = document.querySelector('.editModal')
  var editBtn = document.querySelectorAll('.editBtn')
  editBtn.forEach((button) => {
   button.addEventListener('click', ()=> {
    const buttonId = button.dataset.siteId
    editModal.style.display = 'block'
    var currentSite
    var editHtml = ''
    for(let i=0; i<passwords.length; i++){
    
     
     if(passwords[i].site === buttonId ){
       
       currentSite = passwords[i]
     
     }
       
    
      
    
     
    }
      editHtml = editHtml += `
       <div class="editFm">
          <h1>Enter Your Updated Info</h1>
          <form class="newForm" action="">
           <div>
            <label for="">Site</label>
            <input class="newSite" type="text" placeholder="${currentSite.site}">
          </div> 
          
          <div>
            <label for="">UserName</label>
            <input class="newUserName" type="text" placeholder="${currentSite.email}">
          </div>
            
          <div>
            <label for="">Email</label>
            <input class="newEmail" type="text" placeholder="${currentSite.userName}">
          </div>
      
          <div>
            <label for="">Password</label>
            <input class="newPass" type="text" placeholder="${currentSite.password}">
          </div>

          <button type="reset">Cancel</button>
          <button type="submit">Update</button>
            
          </form>
             <svg class="closeEdit" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        
        </div>
      `
    editModal.innerHTML = editHtml

    var closeEdit = document.querySelector('.closeEdit')    
    closeEdit.addEventListener('click', ()=> {
      editModal.style.display = 'none'
    })

    // == edit ==
    var newForm = document.querySelector('.newForm')
    var newSite = document.querySelector('.newSite')
    var newUserName = document.querySelector('.newUserName')
    var newEmail = document.querySelector('.newEmail')
    var newPassword = document.querySelector('.newPass')

    newForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      
    
        getEdit(passwords,currentSite.site, newSite.value, newUserName.value, newEmail.value, newPassword.value, passwords);

      editModal.style.display = 'none';
      displayPasswords();
      
    })

    newForm.addEventListener("reset", ()=>{
      newForm.reset();
      editModal.style.display = 'none';
    })
    
   
  })
  })
 

  }
 
openPasswords.addEventListener('click', ()=> {
 displayPasswords();
})

function displayAP(){

   var addPHtml = `
      <div class="rightAddP">
          
           <h1> "Welcome" <br>Dont Forget Your Info <br> Your Just One Click Away</h1> 
          
          <form class="addPForm" action="">

            <div>
            <label for="">Site:</label>
            <input class="apSite" type="text" placeholder="Enter WebSite">
          </div>

            <div>
            <label for="">User Name:</label>
            <input class="apUsername" type="text" placeholder="Enter User Name">
          </div>

            <div>
            <label for="">Email:</label>
            <input class="apEmail" type="email" placeholder="Enter Email addres">
          </div>

            <div>
            <label for="">Password</label>
            <input class="apPass" type="password" placeholder="Enter Password">
          </div>
          <button type="reset" class="cancelBTN">cancel</button>
          <input type="submit">

          </form>
        </div>`
   






  right.innerHTML = addPHtml
  console.log(right);

  // ================ add pass

var formAp = document.querySelector(".addPForm")
var apSite = document.querySelector('.apSite');
var apPassword = document.querySelector('.apPass');
var apUserName = document.querySelector('.apUsername');
var apEmail = document.querySelector('.apEmail');

formAp.addEventListener('submit', (e)=> {

var newpasswords = {
  site: apSite.value,
  email: apEmail.value,
  userName: apUserName.value,
  password: apPassword.value,
 }

 
 passwords.push(newpasswords)
 
 saveToStorage(passwords);
        
})

var closeAp = document.querySelector('.cancelBTN')

closeAp.addEventListener('click', ()=>{
  right.innerHTML = `<img class="imgPic" src="../Untitled.67png.png" alt="">`
})

}

openAP.addEventListener('click', () => {
  displayAP();
})

function getEdit(old,newnow, eachInput1, eachInput2, eachInput3, eachInput4, passwords){

  for(let i=0; i<old.length; i++){
    if(old[i].site === newnow){
      if(eachInput1 !== ''){
 
        old[i].site = eachInput1
        saveToStorage(passwords)
        
      }
      if(eachInput2 !== ''){
 
        old[i].userName = eachInput2
        saveToStorage(passwords)
        
      }
      if(eachInput3 !== ''){
 
        old[i].email = eachInput3
        saveToStorage(passwords)
        
      }
      if(eachInput4 !== ''){
 
        old[i].password = eachInput4
        saveToStorage(passwords)
        
      }
    }
  }

 

}




