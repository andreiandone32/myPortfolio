

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-btn');
    const navbarLinks = document.getElementById('nav-links');
    const closeButton = document.getElementById('close-btn');
    const navLogo = document.getElementById('nav-logo')
  
    console.log(navLogo)
  
  
  
  
    menuButton.addEventListener('click', function () {
    navbarLinks.classList.toggle('active');
  
    closeButton.addEventListener('click',function (){
      navbarLinks.classList.remove('active');
      navLogo.classList.remove('active')
    })
    
    
    });
  });
  