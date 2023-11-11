"use strict";

/** Takes an array of nums and an average target Number
 *  returns true if there is a pair average that matches target
 *  otherwise returns false
 */
function averagePair(nums, avgTarget) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  // check if value at left/right index avg === avg Target
  // if value is too high, decrease right
  //  otherwise increase left

  while (leftIndex < rightIndex) {
    const avgCurrent = (nums[leftIndex] + nums[rightIndex]) / 2;
    if (avgCurrent === avgTarget) {
      return true;
    }
    if (avgCurrent > avgTarget) {
      rightIndex--;
    }
    else {
      leftIndex++;
    }
  }

  return false;
}

