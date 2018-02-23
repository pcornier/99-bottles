
## Language Javascript ##
---
- Author: Joseph Taylor
- Date: 01/18/08
- Info: http
- Score:  (2.60 in 5 votes)
- URL: http
- Original URL: http://www.99-bottles-of-beer.net/language-javascript-1671.html
---

```var secondsPerVerse = 0.001;

function bottles(n, capitalize) {
  return (capitalize ? english(n).capitalize() : english(n)) + " " + maybeAddAnS("bottle", n) + " of
beer";
}

function drinkAlotOfBeer(numberOfBottles, actionToPerformOnVerse, depth) {

  var stillDrinkingBeer = true;
  var justReplenishedSupply = false;
  if (!depth) depth = 0;
  depth++;

  var takeOneDownAndPassItAround = function() {
    numberOfBottles--;
  }

  var thereIsNoMoreBeer = function() {
    return !(numberOfBottles > 0);
  }

  var replenishBeerSupply = function() {
    numberOfBottles = depth - 1;
    justReplenishedSupply = true;
  }

  var stopDrinkingBeer = function() {
    stillDrinkingBeer = false;
  }

  var verse = bottles(numberOfBottles, true) + " on the wall,\n" + 
              bottles(numberOfBottles) + "!\n";
          
  if (thereIsNoMoreBeer()) {
    verse += "Go to the store, buy some more,\n";
    replenishBeerSupply();
    stopDrinkingBeer();
  } else {
    verse += "Take " + (numberOfBottles == 1 ? "it" : "one") + " down, pass it around,\n";
    takeOneDownAndPassItAround();
  }

  verse += bottles(numberOfBottles) + " on the wall" + (justReplenishedSupply ? "!" : ".");

  if (stillDrinkingBeer) {
    return actionToPerformOnVerse(verse, [drinkAlotOfBeer, numberOfBottles, actionToPerformOnVerse,
depth]);
  } else {
    return actionToPerformOnVerse(verse);
  }
}

var beerSongViewer = document.body.appendChild(document.createElement("pre"));
function displayVerseFancily(verseText, continueAt) {
  beerSongViewer.innerHTML = verseText;
  if (continueAt) {
    setTimeout(function() { continueAt[0](continueAt[1], continueAt[2], continueAt[3]) },
Math.floor(secondsPerVerse * 1000));
  }
}

function maybeAddAnS(word, n) {
  if (n == 1) {
    return word;
  } else {
    return word + "s";
  }
}

function english(n, args) {
  if (!args) args = {};
  var smallNumbers = ["no more", "one", "two", "three", "four",
                      "five", "six", "seven", "eight", "nine", "ten",
                      "eleven", "twelve", "thirteen", "fourteen",
                      "fifteen", "sixteen", "seventeen", "eighteen",
                      "nineteen"];
  var multiplesOfTen = ["", "", "twenty", "thirty", "fourty", "fifty",
                        "sixty", "seventy", "eighty", "ninety"];
  var reallyBigNumbers = {
    "hundred" : 100,
    "thousand" : 1000,
    "million" : 1000000,
    "billion" : 1000000000,
    "trillion" : 1000000000000
  };
  if (n < smallNumbers.length) {
    if (n == 0 && args.recursing) {
      return null;
    } else {
      return smallNumbers[n];
    }
  } else if (n < 100) {
    args.recursing = true;
    var remainder = n % 10;
    var quotient = Math.floor(n / 10);
    var startOfNumber = multiplesOfTen[quotient];
    var endOfNumber = english(remainder, args);

    if (!endOfNumber) {
      return startOfNumber;
    } else {
      return [startOfNumber, endOfNumber].join("-");
    }
  } else {
    args.recursing = true;
    var biggestNumberThatFits = 0;
    var nameForBiggestNumberThatFits = "zero";
    for (var i in reallyBigNumbers) {
      if (reallyBigNumbers[i] <= n) {
        if (reallyBigNumbers[i] > biggestNumberThatFits) {
          biggestNumberThatFits = reallyBigNumbers[i];
          nameForBiggestNumberThatFits = i;
        }
      }
    }

    var remainder = n % biggestNumberThatFits;
    var quotient = Math.floor(n / biggestNumberThatFits);

    var startOfNumber = "";
    startOfNumber = english(quotient, args);

    var middleOfNumber = nameForBiggestNumberThatFits;
    var endOfNumber = english(remainder, args);

    var number = [startOfNumber, middleOfNumber, endOfNumber];
    if (!startOfNumber) number.shift();
    if (!endOfNumber) number.pop();

    return number.join(" ");
  }
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1);
}

drinkAlotOfBeer(1000, displayVerseFancily);```