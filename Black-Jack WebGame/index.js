
let isAlive = false;
let haveBlackJack = false;
let sum = 0;
let message = "";
let messageEle = document.getElementById("message");
let sumEle = document.getElementById("sum");
let cardEle = document.getElementById("card");







function randomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;

    if (randomNumber === 1) {
        return 11
    }
    else if(randomNumber > 10) {
        return 10
    }
    else {
        return randomNumber
    }

}

startGame = () => {
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    card = [firstCard,secondCard];
    sum = firstCard + secondCard
    renderGame();
};
renderGame  = () => {

    if (sum > 21) {

        message = "you are out of the game";
        isAlive = false;

    }
    
    else if (sum === 21) {
    
        message = "You have a BlackJack";
        haveBlackJack = true;

    }
    
    else if (sum < 21) {
        message = "do you want to draw a new card?";
        
    }
    cardEle.textContent = "Card: "
    for (i = 0; i < card.length; i++ ) {

        cardEle.textContent += card[i] + " ";

    };

    sumEle.textContent =  "Sum: " + sum;
    messageEle.textContent = message;
};


newCard = () => {
    if (isAlive === true && haveBlackJack === false) {



        
        let newDeckCard = randomCard();
        sum += newDeckCard;
        card.push(newDeckCard)
        renderGame();

    }



}






