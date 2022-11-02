// Given an array of integers nums which is sorted in ascending order,
//and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.


//example 1:
// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9;
// Output: 9

// nums = [-1, 0, 3, 5, 9, 12];
// target = 9;


//example2: nums = [-1, 0, 3, 5, 9, 12], target = 2;
// output: -1
// 2 doesnt exist so it returns -1


// const search = function(nums, target) {
//   let left = 0;
//   let right = nums.length -1;
//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2)
//     let potentialMatch = nums[middle];
//     if (potentialMatch === target) {
//       return middle;
//     } else if (potentialMatch > target) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }
//   return -1;
// }

// 278. First Bad Version

// You are a product manager and currently leading a team to develop a new product. Unfortunately, 
// the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
//  Implement a function to find the first bad version. You should minimize the number of calls to the API.

// const solution = function(isBadVersion) {
//   return function(n) {
//     // Min left start is 1
//     let left = 1, right = n;
//     while (left < right) {
//       const mid = left + Math.floor((right - left)/ 2)
//       if (isBadVersion(mid)) {
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     }
//     return left;
//   }
// }

// console.log(isBadVersion(4))


// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, r
// eturn the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1;
  if (target < nums[left]) return 0;
  if (target > nums[right]) return nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target===nums[mid]) return mid;
    else if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
};