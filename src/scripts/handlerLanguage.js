import Typed from 'typed.js';

const en = ['Home','About','Skills', 'Projects', 'Hello, My name is', 'and i am a <span class="multiple-text"></span>', '"There are two ways to build a software project. One is to make it so simple that there are obviously no flaws. The other is to make it so complicated that there are no obvious flaws"']
const br = ['Home','Sobre','Habilidades', 'Projetos','Olá, Eu sou', 'E sou um <span class="multiple-text"></span>', '"Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas óbvias"']

const elements = document.querySelectorAll('[data-language="br"]')



export function handlerLanguageBr(){
    let i = 0
    elements.forEach(function(element){
        element.innerHTML = br[i]
        i++
        const typed = new Typed('.multiple-text',{
            strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
          
          });
    })
}

export function handlerLanguageEn(){
    let i = 0
    elements.forEach(function(element){
        element.innerHTML = en[i]
        i++
        const typed = new Typed('.multiple-text',{
            strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
          
          });
    })
}

  