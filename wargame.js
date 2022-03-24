let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// array of cards, 2-10 represent the corresponding playing card, 11 is J, 12 is Q, 13 is K, 14 is A.
let cardSuits = ['♣', '♥', '♠', '◆'];
// array of suits
 
function getHand(min, max) {
  min = Math.ceil(2);
  max = Math.floor(14);
  return Math.floor(Math.random() * (14 - 2 + 1) + 2);
}
//random integer function that generates an integer between 2-14

function getSuit(){
	var random = Math.floor((Math.random() * cardSuits.length));
  var suit=cardSuits[random]
  return suit;
}
//function that finds a random suit from above array


let player1Hand = getHand();
let player2Hand = getHand();
let player1Suit = getSuit();
let player2Suit = getSuit();
//assigns each player a hand using getHand and getSuit functions above

function compare(player1Hand,player2Hand){
console.log("Player 1's card is a: " + player1Hand + " of " + player1Suit + " " + "Player 2's card is a: " + player2Hand + " of " + player2Suit);
	if (player1Hand == player2Hand){
	return "War!";
  }
  else if(player1Hand > player2Hand){
    	return "Player1 Won!";
		}
    else{
    	return "Player2 Won!";
    }
}
//function that compares each hand value and determines which has higher value 

let hand_result = compare(player1Hand, player2Hand);
console.log(hand_result);
// function which logs the result
