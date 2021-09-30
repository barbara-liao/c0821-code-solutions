console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Ron',
    hand: []
  },
  {
    name: 'Leslie',
    hand: []
  },
  {
    name: 'Ben',
    hand: []
  },
  {
    name: 'April',
    hand: []
  }
];

var cardDeck = [
  { rank: 'Ace', suit: 'clubs' },
  { rank: 2, suit: 'clubs' },
  { rank: 3, suit: 'clubs' },
  { rank: 4, suit: 'clubs' },
  { rank: 5, suit: 'clubs' },
  { rank: 6, suit: 'clubs' },
  { rank: 7, suit: 'clubs' },
  { rank: 8, suit: 'clubs' },
  { rank: 9, suit: 'clubs' },
  { rank: 10, suit: 'clubs' },
  { rank: 'Jack', suit: 'clubs' },
  { rank: 'Queen', suit: 'clubs' },
  { rank: 'King', suit: 'clubs' },
  { rank: 'Ace', suit: 'diamonds' },
  { rank: 2, suit: 'diamonds' },
  { rank: 3, suit: 'diamonds' },
  { rank: 4, suit: 'diamonds' },
  { rank: 5, suit: 'diamonds' },
  { rank: 6, suit: 'diamonds' },
  { rank: 7, suit: 'diamonds' },
  { rank: 8, suit: 'diamonds' },
  { rank: 9, suit: 'diamonds' },
  { rank: 10, suit: 'diamonds' },
  { rank: 'Jack', suit: 'diamonds' },
  { rank: 'Queen', suit: 'diamonds' },
  { rank: 'King', suit: 'diamonds' },
  { rank: 'Ace', suit: 'hearts' },
  { rank: 2, suit: 'hearts' },
  { rank: 3, suit: 'hearts' },
  { rank: 4, suit: 'hearts' },
  { rank: 5, suit: 'hearts' },
  { rank: 6, suit: 'hearts' },
  { rank: 7, suit: 'hearts' },
  { rank: 8, suit: 'hearts' },
  { rank: 9, suit: 'hearts' },
  { rank: 10, suit: 'hearts' },
  { rank: 'Jack', suit: 'hearts' },
  { rank: 'Queen', suit: 'hearts' },
  { rank: 'King', suit: 'hearts' },
  { rank: 'Ace', suit: 'spades' },
  { rank: 2, suit: 'spades' },
  { rank: 3, suit: 'spades' },
  { rank: 4, suit: 'spades' },
  { rank: 5, suit: 'spades' },
  { rank: 6, suit: 'spades' },
  { rank: 7, suit: 'spades' },
  { rank: 8, suit: 'spades' },
  { rank: 9, suit: 'spades' },
  { rank: 10, suit: 'spades' },
  { rank: 'Jack', suit: 'spades' },
  { rank: 'Queen', suit: 'spades' },
  { rank: 'King', suit: 'spades' }
];

var shuffleDeck = _.shuffle(cardDeck);

function dealCards(player) {
  for (var i = 0; i < 2; i++) {
    player.hand.push(shuffleDeck[i]);
    shuffleDeck.splice(0, 1);
  }
}

function dealToAll(allPlayers) {
  for (var i = 0; i < players.length; i++) {
    dealCards(players[i]);
  }
  return players;
}

function calculateScore(allPlayers) {
  dealToAll(players);
  var output = 0;
  for (var i = 0; i < players.length; i++) {
    for (var c = 0; c < players[i].hand.length; c++) {
      if (players[i].hand[c].rank === 'Jack' || players[i].hand[c].rank === 'Queen' || players[i].hand[c].rank === 'King') {
        output += 10;
      } else if (players[i].hand[c].rank === 'Ace') {
        output += 11;
      } else {
        output += players[i].hand[c].rank;
      }
    }
    players[i].score = output;
    output = 0;
  }
  return players;
}

/*
- to find the largest number
- create storage for output
- make the output equal to the first person
- look at each person starting at the second one
- if the score is larger than the one in the output,
  - reassign the output
- return the output
*/

function calculateWinner(allPlayers) {
  calculateScore(allPlayers);
  var output = {};
  output.name = allPlayers[0].name;
  output.score = allPlayers[0].score;
  for (var i = 1; i < players.length; i++) {
    if (allPlayers[i].score > output.score) {
      output.name = allPlayers[i].name;
      output.score = allPlayers[i].score;
    }
  }
  console.log(players);
  console.log('the winner is ', output);
}

calculateWinner(players);
