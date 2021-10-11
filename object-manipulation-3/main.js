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

var cardDeck = [];

function createCards() {
  var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  var rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var card = {};
  for (var s = 0; s < suit.length; s++) {
    for (var r = 0; r < rank.length; r++) {
      card.suit = suit[s];
      card.rank = rank[r];
      cardDeck.push(card);
      card = {};
    }
  }
}

createCards();

var shuffleDeck = _.shuffle(cardDeck);

function dealCards(player) {
  console.log(cardDeck);
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
