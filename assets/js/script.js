const playCard = document.querySelectorAll('.play-card');// Targets the list items.
let playerTimer;  // Targets timer in footer.
let playerFlips = 0;  //Targets Flip counter in footer
//Targets the Card function.
let first;                        
let second;
let matchCardCounter = 0;


let icons = ['fa-solid fa-image',//An Array of icons.
  'fa-solid fa-star',
  'fa-solid fa-heart',
  'fa-solid fa-ghost',
  'fa-solid fa-headphones',
  'fa-solid fa-plane',
  'fa-solid fa-bicycle',
  'fa-solid fa-feather',
];
icons.push(...icons);//Copy icons so I can use the two times.

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
/** Flipcard function.
 * This function ensures when a card is clicked it flips
 * and checks if two cards is matching if not the cards flips 
 * back to their default position.
 */

playCard.forEach(function (card) {
  card.addEventListener('click', function () {
    if (!first && !second) {
      first = card;
      card.classList.add('flipcard');
      playerFlips++;
    } else if (first && !second) {
      if (this===first) return;/*Ensures that the user can not click on the same
       card again to get 8 points and win the game,
        got this one from: https://marina-ferreira.github.io/tutorials/js/memory-game/*/
      second = card;
      playerFlips++;//counts flips.
      card.classList.add('flipcard');
 
      if (first.innerHTML === second.innerHTML) { //checks if the two cards are identical.
        first = null;
        second = null;
        matchCardCounter++;
        document.getElementById('player-text').innerHTML=`You got a match!`;//confirmation text.
        if (matchCardCounter >= 8) {
          document.getElementById('player-text').innerHTML=`All cards match, Congratulations!!`;//Stops the timer.
        }
      }
      else {setTimeout(() => { //if the cards do not match a timer is set to reset the cards in 2sek.
        first.classList.remove('flipcard');
        second.classList.remove('flipcard');
        document.getElementById('player-text').innerHTML=`no match`;
          first = null;
          second = null;
        }, 2000);

      }
    
  }
  });
});

function countFlips() {//counts the number of flips done by the user.
  //targets "Flips:" in footer
  let playerFlipsDiv = document.getElementById("flips");
  playerFlipsDiv.innerHTML = `Flips: ${playerFlips}`
};

/**countTimer
 * This function sets a count up timer wich triggers when the 
 * user flips the first card and stops when all cards match.
 * The CountTimer targets "Timer" in the footer.
 * This code was copied from:
https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
 */
playerTimer = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
  if (playerFlips >=1) //Gets it's value from countFlips function.
  ++totalSeconds;
  let minute = Math.floor(totalSeconds / 60);//Sets the format "00:00"
  let seconds = totalSeconds - minute * 60;
  if (minute < 10)
    minute = "0" + minute;
  if (seconds < 10)
    seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = `Timer:${minute},${seconds}`;//Targets "Timer" in footer.
  if (matchCardCounter >= 8) {//Stops timer.
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

addEventListener("click", countFlips);//Event listener for the countFlips function.