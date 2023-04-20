import Typed from 'typed.js';

const en = ['Home','About','Skills', 'Projects', 'Hello, My name is', 'I am a <span class="multiple-text"></span>', '"There are two ways to build a software project. One is to make it simple that there are obviously no flaws. The other is to make it complicated that there are no obvious flaws" <br> - C.A.R. HOAR','Hello,','I am Guilherme henrique, frontend developer enthusiastic in JavaScript. Specialist in creating Websites and Web Applications. I have been working in the market for 1 year developing personal and business projects. I try to add as much experience to this passage as possible.', 'Languages ​​and Tools', 'skills', 'Agile Methodologies', 'I use optimized methodologies and plans that streamline the production flow. Through feedback and constant interactions, ensuring the agility and efficiency of the process.',
'Clean Code','My main guideline during development is the quality of the code following the best practices in the market.','Updated Tools','I have as part of the job the implementation of new features and technologies. that will add to the project','Optimized Interfaces','I work with the faithful implementation of interfaces striving for the best user experience to meet the expectations of each project','Latest Projects','Memory Game','A very fun project, implementing a Rick and Morty memory game','Landig Page', 'A landing page for customer conversion', 'Calculator', 'A simple and beautiful calculator!']

const br = ['Home','Sobre','Habilidades', 'Projetos','Olá, Eu sou', 'E sou um <span class="multiple-text"></span>', '"Existem duas maneiras de construir um projeto de software. Uma é fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão complicado que não existem falhas óbvias" <br> - C.A.R. HOAR','Olá,', 'Sou Guilherme henrique, desenvolvedor Frontend entusiasta em JavaScript. Especialista em criação de Sites e Aplicações Web. Atuo há 1 ano no mercado desenvolvendo projetos pessoais e empresariais. Procuro nessa passagem agregar o máximo de experiências.', 'Linguagens e Ferramentas', 'Habilidades', 'Metodologias Ágeis','Utilizo metodologias e planejamentos otimizados que dinamizam o fluxo de produção. Através de feedback e interações constantes, garantindo a agilidade e eficiência do processo.',
'Código Limpo','Tenho como minha principal diretriz durante o desenvolvimento a qualidade do código seguindo as melhores práticas do mercado.','Ferramentas Atualizadas','Tenho como parte do trabalho a implementação de novas features e tecnologias. que irão agregar ao projeto','Interfaces Otimizadas','Trabalho com a implementação fiel de interfaces presando pela melhor experiência do usuário para atender as expectativas de cada projeto','Ultimos Projetos','Jogo da Memória','Um projeto bem divertido, implementando um jogo da memoria do Rick and Morty', 'Landing Page', 'Uma landing page para conversão de clientes','Calculadora', 'Uma calculadora Simples e linda!']

const elements = document.querySelectorAll('[data-language="br"]')



export function handlerLanguageBr(){
    let i = 0
    elements.forEach(function(element){
        element.innerHTML = br[i]
        i++
    })
    const typed = new Typed('.multiple-text',{
        strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
    document.querySelector('.navbar-header').classList.remove('active')
    document.getElementById('menu-icon').classList.remove('bx-x')
}

export function handlerLanguageEn(){
    let i = 0
    elements.forEach(function(element){
        element.innerHTML = en[i]
        i++
    })
    const typed = new Typed('.multiple-text',{
        strings: ['Frontend Developer', 'Freelancer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      
      });
      document.querySelector('.navbar-header').classList.remove('active')
    document.getElementById('menu-icon').classList.remove('bx-x')
}

  