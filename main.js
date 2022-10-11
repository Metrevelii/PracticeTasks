// Given array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1: 
// Input: nums = [2, 7, 11, 15], target = 9;
// Output: [0,1]

nums = [2, 7, 11, 15], target = 9;

// Example 2:
// Input: nums = [3,2,4], target = 6;
// Output: [1, 2];

nums2  = [3, 2, 4], target = 6;

// Example 3:
// Input: nums = [3, 3], target = 6;
// Output [0,1];

nums3 = [3, 3], target =6;
// I've created function with two arguments, one is given array of integer nums and second one is for given target number
const twoSum = function(nums, target){
    
    // I've started a for loop which starts at first element (i = 0) and keeps looking through the numbers one by one (i++) untill it has looked through all elements in array
    // (i < nums.length)
    for (let i = 0; i < nums.length; i++) {
        // Second loop will look at the number right next to whatever i represents the first time (j = i + 1), each time increasing by one with the first loop (j++) untill it looks through
        // Every number in array (j < nums.length)
        for(let j = i+1; j < nums.length; j++) {
           // Condition which checks if first element nums[i] adds to second element nums[j] and their sum is equal to given target value; If it does, function returns expected output.
            if(nums[i] + nums[j] == target) {
               return [i, j]
           }
       }
   }
}

// The Big-O notation for this solution would be O(n^2) for time complexity, because we use nested for loop, comparing each number as as its encountered with all the other numbers in array.
// And The Big-O notation for space complexity would be O(1).

console.log(twoSum(nums, 9)); // Output: [0, 1];
console.log(twoSum(nums2, 6)); // Output: [1, 2];
console.log(twoSum(nums3, 6)); // Output: [0, 1];

