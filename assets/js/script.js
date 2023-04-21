let cards = document.getElementsByClassName("play-card");
let cardOne, cardTwo;
let disableDeck= false;


function flipCard({target: clickedCard}) {
   if (cardOne== clickedCard && !disableDeck) {
    clickedCard.getElementsByClassName("flip")
   }
    
}

function matchCard () {

}

function shuffleCard () {

}