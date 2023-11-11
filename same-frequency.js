"use strict";
// add whatever parameters you deem necessary & write docstring

//** Takes in two positive integers return true if both set of integers
// are the same, else return false.  */

function sameFrequency(int1, int2) {
  let int1Str = countDigits(int1);
  let int2Str = countDigits(int2);

  if(int1Str.length !== int2Str.length) return false;

  for(let key in int1Str){
    if(int1Str[key] !== int2Str[key]) return false;
  }
  return true;
}

function countDigits(num){
  const numStr = num.toString();
  console.log(numStr);
  let counter = {};

  for (let digit of numStr){
    counter[digit] = counter[digit] + 1 || 1;
  }
  return counter;
}
