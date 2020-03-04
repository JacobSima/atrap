
    $(document).ready(function () {
      // Custom JS & jQuery here
      // sidenav
       $('.sidenav').sidenav();
       $('.carousel.carousel-slider').carousel({ fullWidth: true });
       $('.tabs').tabs();
       $('.modal').modal();
       $('input#input_text, textarea#textarea2').characterCounter();
    

    });

const nav = document.querySelector('nav')  
const li = document.querySelector('.active-link-bottom') 
const staticIcon = document.querySelector('.static-arrow')
const atelierClick = document.querySelector('.atelier-right a')
const coordinationClick = document.querySelector('.coordination-right a')
const missionsClick = document.querySelector('.missions-right a')
const activityDivs = document.querySelectorAll('.activity-right div')

// function Activity
const activity = e =>{
  if(e.target.parentElement.classList.contains('atelier-right')){
    document.querySelector('.activity-right .atelier').style.display='block'
    document.querySelector('.activity-right .coordination').style.display='none'
    document.querySelector('.activity-right .missions-de-terrain').style.display='none'
  }
  if(e.target.parentElement.classList.contains('coordination-right')){
    document.querySelector('.activity-right .atelier').style.display='none'
    document.querySelector('.activity-right .coordination').style.display='block'
    document.querySelector('.activity-right .missions-de-terrain').style.display='none'
  }
  if(e.target.parentElement.classList.contains('missions-right')){
    document.querySelector('.activity-right .atelier').style.display='none'
    document.querySelector('.activity-right .coordination').style.display='none'
    document.querySelector('.activity-right .missions-de-terrain').style.display='block'
  }
}



atelierClick.addEventListener('click',activity)
coordinationClick.addEventListener('click',activity)
missionsClick.addEventListener('click',activity)


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
     staticIcon.style.display = 'block'

  }else{
    nav.classList.add('transparent')
    nav.style.height = '70px'
    nav.style.transition ='0.6s'
    li.classList.remove('active-link-left')
    li.classList.add('active-link-bottom')
    staticIcon.style.display = 'none'
   
  }
})
 


