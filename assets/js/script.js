const playCard = document.querySelectorAll('.play-card');
let playerTimer;
let playerFlips = 0;

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

for (let i = 0; i < 16; i++) {
  const idx1 = Math.floor(Math.random() * icons.length);
  const idx2 = Math.floor(Math.random() * icons.length);

  const temp = icons[idx1];
  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
  
  for (let i = 0; i < temp.length; i++)+16; {
    shuffleCards=document.getElementsByClassName('back');
    shuffleCards.innerHTML= `<i class="${temp[0]}" aria-label="mountain icon"></i>`
    
    
  }
}





/*i got this code from: https://stackoverflow.com/questions/75882658/memory-game-check-for-match-with-javascript*/
let first;
let second;
let matchCardCounter = 0;

playCard.forEach(function (card) {
  card.addEventListener('click', function () {
    if (!first && !second) {
      first = card;
      
      card.classList.add('flipcard');
      playerFlips++
    } else if (first && !second) {
      if (this===first) return;// got this one from: https://marina-ferreira.github.io/tutorials/js/memory-game/
      second = card;
      playerFlips++;
      card.classList.add('flipcard');
 
      if (first.innerHTML === second.innerHTML) {
        first = null;
        second = null;
       
        alert("match");
        matchCardCounter++;

        if (matchCardCounter >= 8) {
          alert("All cards match!");
        }
      }
      else {
        first.classList.remove('flipcard');
        second.classList.remove('flipcard');
        alert("no match");
        setTimeout(() => {
          first.classList.remove('flipcard');
          console.log("fliop cards back ??")
          second.classList.remove('flipcard');
          first = null;
          second = null;
        }, 2000);

      }
    
  }
  });
});

function countFlips() {
  let playerFlipsDiv = document.getElementById("flips");

  playerFlipsDiv.innerHTML = `Flips: ${playerFlips}`
};
/*This code was copied from:
https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript*/

playerTimer = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
  if (playerFlips >=1)
  ++totalSeconds;
  let minute = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - minute * 60;
  if (minute < 10)
    minute = "0" + minute;
  if (seconds < 10)
    seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = `Timer:${minute},${seconds}`;
  if (matchCardCounter >= 8) {
clearInterval(playerTimer);

}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addEventListener("click", countFlips);