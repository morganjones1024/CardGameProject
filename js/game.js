



//assigns each player a hand using getHand function above

let playerScore = 0;
let computerScore =0;

// function compare(player1Hand,player2Hand){
// console.log("Player 1's card is a: " + player1Hand + " " + "Player 2's card is a: " + player2Hand);
//     if (player1Hand == player2Hand){
//     let result = "War!";
    
//   }
//   else if(player1Hand > player2Hand){
//         playerScore++;
//         return result =  "Player1 Won!";
//         }
//     else{
//         computerScore++
//         return result = "Player2 Won!";
//     }
// }

//adding WAR function to above compare();
function gameRun(){
    
let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// array of cards, 2-10 represent the corresponding playing card, 11 is J, 12 is Q, 13 is K, 14 is A.
let allSuits = ["hearts", "clubs", "spades", "diamonds"];

function getSuit(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    let suit = Math.floor(Math.random()*(4-1));
    return suit;
}


function getHand(min, max) {
  min = Math.ceil(2);
  max = Math.floor(14);
  return card =Math.floor(Math.random() * (14 - 2 + 1) + 2);
}
//random integer function that generates an integer between 2-14

let player1Hand = getHand(); getSuit();
let player2Hand = getHand();

    function playRound(player1Hand, player2Hand){
        let playerCard = getHand();
        let computerCard = getHand();
        let playerScore=0;
        let computerScore=0;
        compare(playerCard, computerCard);
        console.log(result);
    }
    function compare(player1Hand,player2Hand, suit){
        console.log("Player 1's card is a: " + player1Hand + " "+"Player 2's card is a: " + player2Hand);

        if (player1Hand === player2Hand){
            return result = "WAR!";
        
      }
      else if(player1Hand > player2Hand){
            playerScore++;
            return result =  "Player1 Won!";
            }
        else{
            computerScore++;
            return result = "Player2 Won!";
        }

    }

function showScore(){
    console.log(playerScore);
    console.log(computerScore);
}
playRound();
showScore();
}

function resetGame(){
    playerScore=0;
    computerScore=0;
};