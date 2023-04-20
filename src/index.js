import './styles/style.css';
import slider from './scripts/slider';
import Typed from 'typed.js';
import handlerTheme from './scripts/handlerTheme.js';
import { handlerLanguageBr, handlerLanguageEn } from './scripts/handlerLanguage';
import toggleIcon from './scripts/toggleIconNav';
import scrollSections from './scripts/scrollSections';

document.getElementById('theme-button').addEventListener('click', handlerTheme)
document.getElementById('br-button').addEventListener('click', handlerLanguageBr)
document.getElementById('en-button').addEventListener('click', handlerLanguageEn)
document.getElementById('menu-icon').addEventListener('click',toggleIcon)
window.addEventListener('scroll',scrollSections)


//Writes the loop of strings
  const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
