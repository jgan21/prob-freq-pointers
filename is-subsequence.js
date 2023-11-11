"use strict";

// add whatever parameters you deem necessary & write docstring
/** takes a target subString and a searchString, returns true if subString
 *  is found if searchString, else returns false
 */
function isSubsequence(subString,searchString) {
  //need the order too
  const subArray = subString.split('');
  const searchArray = searchString.split('');
  const subStringCharCount = letterFreq(subString);
  const searchStringCharCount = letterFreq(searchString);

  for(let key of subString){
    if(!(searchStringCharCount[key] >= subStringCharCount[key])){
      return false;
    }
    if(subArray.indexOf(key) > searchArray.lastIndexOf(key)){
      return false;
    }
  }
  return true;
}


function letterFreq(letters){
  const letterCount = {};
  for(let letter of letters){
    letterCount[letter] = letterCount[letter] + 1 || 1;
  }
  return letterCount;
}

isSubsequence("abc", "abracadabra"); //true
