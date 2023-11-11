"use strict";

// add whatever parameters you deem necessary & write doc comment
/** Takes in word and letters and it will return true if
 * letters can be constructed to a word */
//TODO: explicit docstring, e.g give an example of true vs false

function canConstructWord(word, letters) {
  const wordCounter = frequencyCounter(word);
  const letterCounter = frequencyCounter(letters);

  for (let letter in wordCounter){
    if (!(letterCounter[letter] >= wordCounter[letter])) {
      return false;
    }
  }
  return true;
}

function frequencyCounter(string){
  const letterContainer = {};
  for (let char of string){
    letterContainer[char] = letterContainer[char] + 1 || 1;
    }
  return letterContainer;
  }
