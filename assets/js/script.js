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
'fa-solid fa-feather',
'fa-solid fa-image',
'fa-solid fa-star',
'fa-solid fa-heart',
'fa-solid fa-ghost',
'fa-solid fa-headphones',
'fa-solid fa-plane',
'fa-solid fa-bicycle',
'fa-solid fa-feather'];

icons.push(...icons);

// Shufle icons. The Fisher-Yates algorith.
const shuffleCards= icons => {
  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    const temp= icons[i];
    icons[i]=icons[j];
    icons[j]= temp;
  }
}
function shuffle (){
  mathed=0;
  disabeDeck= false;
  cardOne=cardTwo="";
  icons.sort(() => Math.random() > 0.5 ? 1: -1);
  cards.forEach((card,i) => {
    card.classList.remove("flipcard");
    let symbol= card.querySelector("back");
    card.addEventListener("click", flipCard);
  })
}


// I made this function with help of this turorial:https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c

function flipCard () {
this.classList.toggle('flipcard');

}
card.forEach(card => card.addEventListener('click', flipCard));