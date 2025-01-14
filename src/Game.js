const data = require('./data');
const util = require('./util');

const Card = require("./Card.js");
const Deck = require("./Deck.js");
const Round = require("./Round.js");

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! 
    You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = data.prototypeData.map(e => {
      return new Card(e["id"], e["question"], e["answers"], e["correctAnswer"]);
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.currentRound.timer();
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;