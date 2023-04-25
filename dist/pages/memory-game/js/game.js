

const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');


const characters = [
    'beth' , 
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'summer',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = ''
let secondCard = ''

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length == 20) {
        swal(`Parabéns ${spanPlayer.innerHTML}`, `Você concluiu o game faltando:\n${timer.innerHTML} Seg`, 'success');
        clearInterval(this.loop);
    }
}

const checkcards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if(firstCharacter == secondCharacter) {

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()

    }else {

        setTimeout(() => {
           firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card') 

            firstCard = ''
            secondCard = ''
        }, 500)
        
    }
}

const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard == '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    }else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkcards();
    }

}

const CreateCard = (character) =>{
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../images/${character}.png)`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character',character)

    return card;
}

const loadGame = () => {

    const duplicatecharacters = [...characters, ...characters];

    const arrayembaralhado = duplicatecharacters.sort( () => Math.random() - 0.5);


    arrayembaralhado.forEach((character) => {
        const card = CreateCard(character);
        grid.appendChild(card);
    })
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime - 1;

        if(timer.innerHTML == 0 ){
            swal("Você Perdeu!", "Você não concluiu o Jogo a tempo, recarregue a página para jogar novamente", "error");
            clearInterval(this.loop);
        }
    }, 1000);
}


window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();

    loadGame();
}

const restart = () => {
    
}
