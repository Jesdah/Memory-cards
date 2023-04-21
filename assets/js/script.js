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
  const card = document.getElementsByClassName('side');
   card.addEventListener('click', () => {
    if (!card.classList.contains('flip')) {
      card.classList.add('flip');

      if (!previousShownCard) {
        previousShownCard = card;
      } else {
        const iconOne = previousShownCard.querySelector('i').classList[1];

        const iconTwo = card.querySelector('i').classList[1];

        if (iconOne !== iconTwo) {
          const temp = previousShownCard;
          setTimeout(() => {
            temp.classList.remove('flip');
            card.classList.remove('flip');
          }, 1000);
        }
        previousShownCard = undefined;
      }
    }
  });

  cards.push(card);

  container.appendChild(card);
}
