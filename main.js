// 977 Squares of a sorted array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// nums = [-4, -1, 0, 3, 10];
let nums = [-7,-3,2,3,11];

function sortedSquares(nums) {
  let n = nums.length,
  left = 0,
  right = n -1,
  result = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    // Math abs converts any negative numbers to their integer equivalent.
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] **2;
      left++;
    }  else {
      result[i] = nums[right] **2;
      right--;
    }
  }
  return result;
}







console.log(sortedSquares(nums));