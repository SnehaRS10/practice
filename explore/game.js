let cards = []
let sum=0
let message=""
let isAlive = true
let hasBlackJack = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : 'Sneha',
    chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber == 1){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards.push(firstCard,secondCard)
        renderCard()
    
}

function renderCard(){
    cardsEl.textContent = "Cards: "
    
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        message="Do you want to draw new card?"
    }else if(sum === 21){
        message="Ohoo! Its BlackJack!"
        hasBlackJack=true
    }else{
        message="You lost the game!"
        isAlive=false
    }
    messageEl.textContent= message   
}

function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum = sum + card
        renderCard()
    }
    
}



