"use strict";

// add whatever parameters you deem necessary & write docstring
/** takes a target subString and a searchString, returns true if subString
 *  is found if searchString, else returns false
 */
function isSubsequence(subString,searchString) {
  let left = 0;
  let right = 0;

  while(right < searchString.length){ // while(subString.length < searchString[left])
    if(subString[left] !== searchString[right]){
      right++;
    }else{
      left++;
      right++;
    }
    // if(right === searchString.length-1) return false;
    if(subString.length)
  }
  return true;
}


// function letterFreq(letters){
//   let letterCount = {};
// }
