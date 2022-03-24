// //need to define 52 card deck

// //need to randomize 2x(26 card decks)
// //assign one to computer, one to player

// //draw top card(index[0]) for each
// //compare cards (highest wins, tie = war mode, cards go to winner discard pile)
// //war mode (draw index [0-3], compare [3], standard win parameters, all cards to winner discard pile)

// //when deck size = 0, check discard pile. If either discard === 0, then player loses. If cards don't ===0, game continues.

// //randomize discard piles (human and computer) into new personal arrays

// //play game until deck = 0, compare discard piles (?===0 game over:reshuffle)

// // let deck = {
// //  "Clubs": '1,2,3,4,5,6,7,8,9,10,11,12,13',
// //  "Diamonds": '1,2,3,4,5,6,7,8,9,10,11,12,13',
// //  "Spades": '1,2,3,4,5,6,7,8,9,10,11,12,13',
// //  "Hearts":'[1,2,3,4,5,6,7,8,9,10,11,12,13'
// // };
// console.clear();

// let Card = (function(){
// const suitNames = ['spades', 'diamonds', 'clubs', 'hearts'],
// suitCodes = ['\u2660', '\u2666', '\u2663', '\u2665'],

// Card = function(index){
//   this.index = index;
//   this.value = (index % 13)+1;
//   this.suit = suitNames[Math.floor(index/13)];
// };

// Card.prototype = {
// get number() {
// switch(this.value) {
//   case 11:
//     return 'J';
//   case 12:
//     return 'Q';
//   case 13:
//     return 'K';
//   case 1:
//     return 'A';
//   default:
//     return this.value;
// }
// return this.value;
// },
// get name() {
// var numberName = (function(n){
//   switch(n){
//     case 'A': return 'Ace';
//     case 'K': return 'King';
//     case 'Q': return 'Queen';
//     case 'J': return 'Jack';
//     default: return n;
//   }
// })(this.number);
// return numberName + ' of ' + this.suit;
// },
// get suitUnicodeArray() { return suitCodes; },
// get suitNameArray() { return suitNames; }
// };
      
// return Card;
// })();

// console.log(new Card(13));

// var deck = Array.apply(null, Array(52)).map(function(_, i){ return new Card(i); });

// let playerDeck = [], cpuDeck = [], drawIndex;

// while(deck.length >0){
//     drawIndex = Math.random() * deck.length;
//     playerDeck.push(deck.splice(drawIndex, 1)[0]);

//     drawIndex = Math.random()*deck.length;
//     cpuDeck.push(deck.splice(drawIndex.cpu, 1)[9]);
// }

// // console.log(new Card(13));
// //   let playerHand = [];
// //   let computerHand = [];
// //   function initialDeal(){
// //       for (let i=0; i<deck1.length; i++){
// //         playerHand.push[i];
// //         console.log(playerHand);
// //       }
// //   }

// //   initialDeal();

let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// array of cards, 2-10 represent the corresponding playing card, 11 is J, 12 is Q, 13 is K, 14 is A.
 
function getHand(min, max) {
  min = Math.ceil(2);
  max = Math.floor(14);
  return card =Math.floor(Math.random() * (14 - 2 + 1) + 2);
}
//random integer function that generates an integer between 2-14

let player1Hand = getHand();
let player2Hand = getHand();


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

    function playRound(player1Hand, player2Hand){
        let playerCard = getHand();
        let computerCard = getHand();
        let playerScore=0;
        let computerScore=0;
        compare(playerCard, computerCard);
        console.log(result);
    }
    function compare(player1Hand,player2Hand){
        console.log("Player 1's card is a: " + player1Hand + " " + "Player 2's card is a: " + player2Hand);

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
showScore();
}

function resetGame(){
    playerScore=0;
    computerScore=0;
}
//function that compares each hand value and determines which has higher value 

// let hand_result = compare(player1Hand, player2Hand);
// console.log(hand_result);
// function which logs the result