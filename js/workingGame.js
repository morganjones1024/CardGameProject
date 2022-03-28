//initializing scores:
let playerScore = 100;
let computerScore =0;

//adjusted scoring for game play
let playerDeck = 26;
let computerDeck = 26;
let playerDiscard = 0;
let computerDiscard = 0;

//THIS BEGINS DOM WORK
// for some reason using this as a variable isn't working, but doing it directly is
// let playerCardDisplay = document.getElementById("playerCard").innerText;


//THIS ENDS DOM WORK


function gameRun(){

let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// array of cards, 2-10 represent the corresponding playing card, 11 is J, 12 is Q, 13 is K, 14 is A.
let cardSuits = ['♣', '♥', '♠', '◆'];
// array of suits


//assigns a random value to represent cards:
function getCard(min, max) {
  min = Math.ceil(2);
  max = Math.floor(14);
  return Math.floor(Math.random() * (14 - 2 + 1) + 2);
}


//function that finds a random suit from suits array
function getSuit(){
	let random = Math.floor((Math.random() * cardSuits.length));
    let suit=cardSuits[random]
    return suit;
}

//assigns a card face and suit to player and computer:
let playerFace = getCard();
let computerFace = getCard();
let playerSuit = getSuit();
let computerSuit = getSuit();

function compare(playerFace,computerFace){

//this effectively plays the game, generating cards and comparing
//them, then outputting card values/scores/round info
console.log("Player 1's card is " + playerFace + " of " + playerSuit + "\n" + "Player 2's card is a: " + computerFace + " of " + computerSuit);
    //handles the "War" event on matching cards:
    if (playerFace == computerFace){
        //changes the lower text area during War event:
        document.getElementById("warDeclaration").innerText ="It's a War!";
        let playerWar = getCard();
        let computerWar = getCard();
        if (playerWar > computerWar){
            playerScore+=10;
            playerDeck-=5;
            computerDeck-=5;
            playerDiscard+=10;
            //all innerText lines below here display the round results to a div:
            //(all will likely need to be refactored when HTML comes through)
            document.getElementById("roundResults").innerText = "You won the War!";
        } else if (playerWar<computerWar){
            computerScore+=10;
            playerDeck-=5;
            computerDeck-=5;
            computerDiscard+=10;
            document.getElementById("roundResults").innerText = "The Computer won the war!";
        } else {
            document.getElementById("roundResults").innerText = "We're declaring peace instead of a double-War.";
        }
    } else if (playerFace > computerFace){
        document.getElementById("warDeclaration").innerText =" \n \n ";
    playerScore++;
    playerDeck--;
    playerDiscard+=2;
    computerDeck --;
    document.getElementById("roundResults").innerText ="You won the round!";
    } else {
        document.getElementById("warDeclaration").innerText =" \n \n ";

    computerScore++;
    playerDeck--;
    computerDiscard+=2;
    playerDeck--;
    document.getElementById("roundResults").innerText ="The computer won the round!";
    }

//fixing 11-14 display values to reflect face cards:
    let playerFaceTrue = playerFace;
    let computerFaceTrue = computerFace;

    switch (playerFaceTrue){
        case 2:
        case 3:
        case 4: 
        case 5: 
        case 6: 
        case 7: 
        case 8: 
        case 9: 
        case 10: 
            playerFaceTrue = playerFace;
            break;
        case 11:
            playerFaceTrue = "J";
            break;
        case 12:
            playerFaceTrue = "Q";
            break;
        case 13:
            playerFaceTrue = "K";
            break;
        case 14:
            playerFaceTrue = "A";
            break;     
    }

    switch (computerFaceTrue){
        case 2:
        case 3:
        case 4: 
        case 5: 
        case 6: 
        case 7: 
        case 8: 
        case 9: 
        case 10: 
            computerFaceTrue = computerFace;
            break;
        case 11:
            computerFaceTrue = "J";
            break;
        case 12:
            computerFaceTrue = "Q";
            break;
        case 13:
            computerFaceTrue = "K";
            break;
        case 14:
            computerFaceTrue = "A";
            break;    
    }
//DOM Display work:

//Card Display Divs:
document.getElementById("playerCard").innerText = playerFaceTrue+playerSuit;
document.getElementById("computerCard").innerText = computerFaceTrue+computerSuit;
//Score Display Divs:
// (these are removed because the score doesn't actually matter for the game - number of cards do)
// (see: lines 161-189 for win function)
// document.getElementById("playerScore").innerText = playerScore;
// document.getElementById("computerScore").innerText = computerScore;
//Deck Display Divs:
document.getElementById("playerDeckReport").innerText= playerDeck;
document.getElementById("computerDeckReport").innerText= computerDeck;
//Discard Display Divs:
document.getElementById("playerDiscardReport").innerText = playerDiscard;
document.getElementById("computerDiscardReport").innerText = computerDiscard;


//determines if the game is over by checking if deck && discard are empty, or "shuffles" discard # back into deck#
function playerShuffle(){
    if (playerDeck <= 0){
        if (playerDiscard <= 0){
            console.log("+++GAME OVER: YOU LOSE+++");
        } else {
            playerDeck = playerDiscard;
            playerDiscard = 0;
        }
    }
};
function computerShuffle(){
    if (computerDeck <= 0){
        if (computerDiscard <= 0){
            console.log("+++GAME OVER: YOU WIN!!!+++");
        } else {
            computerDeck = computerDiscard;
            computerDiscard = 0;
        }
    }
};

function winBanner(){
    if (playerDeck <=0 && playerDiscard <=0){
        document.getElementById("warDeclaration").innerText ="GAME OVER: YOU LOSE";
        document.getElementById("instruction").innerHTML = "<h3> Hit reset to play again! </h3>";
        document.getElementById("gameButton").disabled = true;
    } else if (computerDeck <=0 && computerDiscard <=0){
        document.getElementById("warDeclaration").innerText ="GAME OVER: YOU WIN!";
        document.getElementById("instruction").innerHTML = "<h3> Hit reset to play again! </h3>";
        document.getElementById("gameButton").diabled = true;

    }
}
playerShuffle();
computerShuffle();
winBanner();
};

//running the above (console.log exists as a check/compare to output)
compare(playerFace, computerFace);
console.log(`PlayerScore: ${playerScore}`);
console.log(`ComputerScore: ${computerScore}`);
console.log(`Decks: Player: ${playerDeck} | Computer: ${computerDeck}`);
console.log(`Discards: Player ${playerDiscard} | Computer: ${computerDiscard}`);

//end of gameRun
};

//simple reset button function, clears the screen and resets
//scores to 0
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerDeck = 26;
    computerDeck = 26;
    playerDiscard = 0;
    computerDiscard = 0;
    //Card Face divs:
    document.getElementById("playerCard").innerText = "-";
    document.getElementById("computerCard").innerText = "-";
    //Score Display Divs:
    // document.getElementById("playerScore").innerText = '-';
    // document.getElementById("computerScore").innerText = '-';
    //restore the button function:
    document.getElementById("gameButton").disabled = false;
    //reset round/war notices to blank:
    document.getElementById("roundResults").innerText =" ";
    document.getElementById("warDeclaration").innerText =" ";
    //reset "hit reset to play again"
    document.getElementById("instruction").innerHTML = '<h3> Click the card to play! </h3>' ;
    //Score Display Divs:
    //same as the aboves: all score mechanics disabled as irrelevant
    // document.getElementById("playerScore").innerText = ' ';
    // document.getElementById("computerScore").innerText = '-';
    //Deck and Discard Divs:
    document.getElementById("playerDeckReport").innerText= "-";
    document.getElementById("computerDeckReport").innerText= "-";
    //Discard Display Divs:
    document.getElementById("playerDiscardReport").innerText = "-";
    document.getElementById("computerDiscardReport").innerText = "-";

};


