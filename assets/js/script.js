const container =document.querySelectorAll('play-card');
const cardslength = 16;
const cards = [];

let previousShownCard = undefined;


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
for (let i = 0; i < 100; i++) {
    const idx1 = Math.floor(Math.random() * icons.length);
    const idx2 = Math.floor(Math.random() * icons.length);
    
    const temp = icons[idx1];
  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
}
console.log(icons);
for (let i = 0; i < cardslength; i++) {
console.log(cardslength);
}
function flipCards() {
  document.getElementsByClassName('flip')
}
document.flipCards;
