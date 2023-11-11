"use strict";

// add whatever parameters you deem necessary & write docstring

/** Takes an array of nums and an average target Number
 *  returns true if there is a pair average that matches target
 *  otherwise returns false
 */
function averagePair(nums,avgTarget) {
  let left = 0;
  let right = nums.length-1;
  let avgCurrent;
  // check if value at left/right index avg === avg Target
  // if value is too high, decrease right
  //  otherwise increase left

  while(left < right){
    avgCurrent = (nums[left]+nums[right])/2;
    if(avgCurrent === avgTarget){
      return true;
    }
    if(avgCurrent > avgTarget){
      right--;
    }
      else{
        left++;
      }
  }

  return false;
}

