let player = {
    name : "Gokx",
    chips : 200
}

let cards=[]
let hasBlackJack=false;
let sum = 0;
let isAlive= false;
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el"); 
let sumEl=document.querySelector("#sum-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber===1){
        return 11
    }else if(randomNumber > 10) {
        return 10
    }else{
    return randomNumber;
    }
}



function startGame(){
    isAlive=true;
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}
function renderGame(){
    if(sum <= 20){
     message = "Do You want to draw a new card?"
}else if(sum === 21){
     message= "You got blackjack"
    hasBlackJack = true;
}else if(sum > 21) {
     message ="sorry! your out of the game"
    isAlive = false;
}
cardsEl.textContent= "Cards : " 
for(let i = 0; i < cards.length ; i++){
    cardsEl.textContent += cards[i]+" ";
};
messageEl.textContent = message;
sumEl.textContent ="Sum: " + sum;
}


function newCard(){
    if(isAlive==true && hasBlackJack==false){
        let card = getRandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
    }
}