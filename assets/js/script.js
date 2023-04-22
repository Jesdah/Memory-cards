const card= document.querySelectorAll('.play-card');
const cardslength = 16;
let cards = [];


let flippedCard=false;
let cardOne,cardTwo;

let icons= ['fa-solid fa-image',
'fa-solid fa-star',
'fa-solid fa-heart',
'fa-solid fa-ghost',
'fa-solid fa-headphones',
'fa-solid fa-plane',
'fa-solid fa-bicycle',
'fa-solid fa-feather'];

icons.push(...icons);

// Shufle icons.
function shuffleCards(icons) {
  cards=icons.length;
  for (let i = 0; i < cards; i++) {
    icons =Math.Floor(Math.random()*16);
    
  }
  
};


// I made this function with help of this turorial:https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c

function flipCard () {
this.classList.toggle('flipcard');

}
card.forEach(card => card.addEventListener('click', flipCard));