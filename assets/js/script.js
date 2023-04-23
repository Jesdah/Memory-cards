const playCard = document.querySelectorAll('.play-card');
const cardslength = 16;
let cards = [];
let playerTimer;
let playerFlips;

let flippedCard = false;
let cardOne, cardTwo;

let icons = ['fa-solid fa-image',
  'fa-solid fa-star',
  'fa-solid fa-heart',
  'fa-solid fa-ghost',
  'fa-solid fa-headphones',
  'fa-solid fa-plane',
  'fa-solid fa-bicycle',
  'fa-solid fa-feather',
];

icons.push(...icons);

// Shufle icons. copied from: https://github.com/swapnilsparsh/30DaysOfJavaScript/blob/master/27%20-%20Memory%20Matching%20Game/script.js

for (let i = 0; i < 100; i++) {
  const idx1 = Math.floor(Math.random() * icons.length);
  const idx2 = Math.floor(Math.random() * icons.length);

  const temp = icons[idx1];
  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
}
console.log(icons);



// I made this function with help of this turorial:https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
/*
function flipCard() 
  this.classList.toggle('flipcard');*/
let first;
let second;
let matchCardCounter=0;

playCard.forEach(function(card) {
  card.addEventListener('click', function() {
    if (!first && !second) {
    first=card;
    card.classList.add('flipcard');
    playerFlips++
    } else if (first && !second) {
      second=card;
      playerFlips++
      card.classList.add('flipcard')

      if (first.innerHTML=== second.innerHTML) {
        first=null;
        second=null;
        alert ("match");
        matchCardCounter++;

        if (matchCardCounter >=8) {
          alert ("All cards match!");
        } else {
         
          first.classList.remove('flipcard');
          second.classList.remove('flipcard');
           alert("no match")
           setTimeout(()=> {
            first.classList.remove('flipcard');
            second.classList.remove('flipcard');
            first=null;
            second=null;
          }, 2000);
        }
      }
    }
  })
} ) 

function countFlips(){
const playerFlipsDiv=document.getElementById("flips");

playerFlipsDiv.textContent= `Flips: ${playerFlips}`
}

playCard.forEach(card => card.addEventListener('click', flipCard));