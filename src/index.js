import './styles/style.css';
import slider from './scripts/slider';
import Typed from 'typed.js';
import handlerTheme from './scripts/handlerTheme.js';

document.getElementById('theme-button').addEventListener('click', handlerTheme)



//Writes the loop of strings
const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true

});


