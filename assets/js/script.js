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

// Shufle icons. from: https://github.com/swapnilsparsh/30DaysOfJavaScript/blob/master/27%20-%20Memory%20Matching%20Game/script.js

for (let i = icons.length- 1; i > 0; i--) {
  const idx1 = Math.floor(Math.random() * icons.length);
  const idx2 = Math.floor(Math.random() * icons.length);

  let temp = icons[idx1];
  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
  
}


//shuffleIcons(icons)=document.getElementsByClassName('back');
function executeShuffle() {
document.getElementById('0').innerHTML= `<i class="${icons[0]}"></i>`;
document.getElementById('1').innerHTML= `<i class="${icons[1]}"></i>`;
document.getElementById('2').innerHTML= `<i class="${icons[2]}"></i>`;
document.getElementById('3').innerHTML= `<i class="${icons[3]}"></i>`;
document.getElementById('4').innerHTML= `<i class="${icons[4]}"></i>`;
document.getElementById('5').innerHTML= `<i class="${icons[5]}"></i>`;
document.getElementById('6').innerHTML= `<i class="${icons[6]}"></i>`;
document.getElementById('7').innerHTML= `<i class="${icons[7]}"></i>`;
document.getElementById('8').innerHTML= `<i class="${icons[8]}"></i>`;
document.getElementById('9').innerHTML= `<i class="${icons[9]}"></i>`;
document.getElementById('10').innerHTML= `<i class="${icons[10]}"></i>`;
document.getElementById('11').innerHTML= `<i class="${icons[11]}"></i>`;
document.getElementById('12').innerHTML= `<i class="${icons[12]}"></i>`;
document.getElementById('13').innerHTML= `<i class="${icons[13]}"></i>`;
document.getElementById('14').innerHTML= `<i class="${icons[14]}"></i>`;
document.getElementById('15').innerHTML= `<i class="${icons[15]}"></i>`;





console.log(icons[0]);
console.log(icons[1]);
console.log(icons[2]);
console.log(icons[3]);
console.log(icons[4]);
console.log(icons[5]);
console.log(icons[6]);
console.log(icons[7]);
console.log(icons[8]);
console.log(icons[9]);
console.log(icons[10]);
console.log(icons[11]);
console.log(icons[12]);
console.log(icons[13]);
console.log(icons[14]);
console.log(icons[15]);


}


//test 
/*function shuffleCards(icons) {
  for (let i = icons.length - 1; i > 0; i--) {
    const idx1 = Math.floor(Math.random() * (i+1));
    const idx2 = Math.floor(Math.random() * (i+1));
    [icons[idx1]],[icons[idx2]]=[icons[idx1]],[icons[idx2]]
    
  }
  shuffleCards(icons)
}*/






/** Flipcard function.
 * This function ensures when a card is clicked it flips
 * and checks if two cards is matching if not the cards flips 
 * back to their default position.
 * I got this code from:
 *  https://stackoverflow.com/questions/75882658/memory-game-check-for-match-with-javascript
 */

playCard.forEach(function (card) {
  card.addEventListener('click', function () {
    if (!first && !second) {
      first = card;
      
      card.classList.add('flipcard');
      playerFlips++;
      console.log(first)
    } else if (first && !second) {
      if (this===first) return;/*Ensures that the user can not click on the same
       card again to get 8 points and win the game,
        got this one from: https://marina-ferreira.github.io/tutorials/js/memory-game/*/
      second = card;
      console.log(second)
      playerFlips++;//counts flips.
      card.classList.add('flipcard');
 
      if (first === second) { //checks if the two cards are identical.
        console.log(first.innerHTML);
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
        document.getElementById('player-text').innerHTML=`No match`;
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
 * This code structure was copied from:
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
/**This function targets the modal.
 * This code was taken from:
 * https://www.w3schools.com/howto/howto_css_modals.asp
 */

let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");// Get the button that opens the modal


let span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal


btn.onclick = function() {  // When the user clicks on the button, open the modal
  modal.style.display = "block";
}


span.onclick = function() { // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}


window.onclick = function(event) {  // When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addEventListener("click", countFlips);//Event listener for the countFlips function.