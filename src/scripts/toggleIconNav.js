let menuIcon = document.getElementById('menu-icon')
let navbar = document.querySelector('.navbar-header')

export default function toggleIcon(){
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')

}
