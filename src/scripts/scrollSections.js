export default function scrollSections(){
  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('header nav a')
  let menuIcon = document.getElementById('menu-icon')
  let navbar = document.querySelector('.navbar-header')
  
  sections.forEach( function(sec){
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if(top >= offset && top < offset + height){
      navLinks.forEach(function(link){
        link.classList.remove('active')
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active')
      })
    }
  })

  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
}