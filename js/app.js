
    $(document).ready(function () {
      // Custom JS & jQuery here
      // sidenav
       $('.sidenav').sidenav();
    

    });

const nav = document.querySelector('nav')  
const li = document.querySelector('.active-link-bottom') 

window.addEventListener("scroll",()=>{
  const fixed = document.querySelector('#fixed')
  fixed.classList.toggle('navbar-fixed',window.scrollY > 0)
  if(window.scrollY > 0){
     nav.classList.remove('transparent')
     nav.style.background = '#17a2b8'
     nav.style.height = '55px'
     nav.style.transition ='0.4s'
     li.classList.remove('active-link-bottom')
     li.classList.add('active-link-left')
  }else{
    nav.classList.add('transparent')
    nav.style.height = '70px'
    nav.style.transition ='0.4s'
    li.classList.remove('active-link-left')
    li.classList.add('active-link-bottom')
   
  }
})
 


