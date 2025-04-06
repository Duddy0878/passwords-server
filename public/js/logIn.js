
var openLogForm = document.querySelector('.logIn');
var logInForm = document.querySelector('.loginform');
var closeLogForm = document.querySelector('.closeLOgIn');
var link = "../html/index.html"

var lIForm = document.querySelector('.lIForm')
var lIUser = document.querySelector('.logInUser');
var lIPass = document.querySelector('.logInPass');

lIForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  if(lIUser.value === 'DuddyWerz' && lIPass.value === 'Duddy0878' ){
    window.location.replace('../html/index.html')
  }
  else{
    lIUser.value = '' 
    lIPass.value = '';
    alert('error')
  }

})

openLogForm.addEventListener('click' ,() => {
  logInForm.style.display = 'block'
  
})

closeLogForm.addEventListener('click', ()=> {
    logInForm.style.display = 'none';
})