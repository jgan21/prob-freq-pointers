"use strict";

//** Takes an array of keys and an array of values, return an object but
// if the array with values is shorter than the array with keys, the
// missing key's value will be set to null */

function twoArrayObject(arrayOfKeys, arrayOfValues) {
  const combineKeyAndVal = {};
// looping through all the keys
// matching them at their index
// if index's value is undefining, null will be assigned

  for (let i = 0; i < arrayOfKeys.length; i++){
    if (arrayOfValues[i] === undefined) {
       arrayOfValues[i] = null;
    }
    combineKeyAndVal[arrayOfKeys[i]] = arrayOfValues[i];
  }
  return combineKeyAndVal;
}
