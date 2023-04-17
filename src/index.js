import './styles/style.css';
import slider from './scripts/slider';
import Typed from 'typed.js';
import handlerTheme from './scripts/handlerTheme.js';
import { handlerLanguageBr, handlerLanguageEn } from './scripts/handlerLanguage';

document.getElementById('theme-button').addEventListener('click', handlerTheme)
document.getElementById('br-button').addEventListener('click', handlerLanguageBr)
document.getElementById('en-button').addEventListener('click', handlerLanguageEn)




//Writes the loop of strings
  const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});




