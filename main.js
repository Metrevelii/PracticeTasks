// Replace Elements with Greatest Element on Right Side

// Input: arr = [17, 18, 5, 4, 6, 1]
// Output: [18,6,6,6,1,-1]

// Big O - O(n)

let replaceElements = function (arr) {
  let max = arr[arr.length - 1];

  for (let j = arr.length - 2; j >= 0; --j) {
    let curr = arr[j];
    arr[j] = max;
    max = Math.max(max, curr);
  }

  arr[arr.length - 1] = -1;
  return arr;
};

// Example 1:

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // Output: [18,6,6,6,1,-1]

// Example 2: 
// arr = [400];

console.log(replaceElements([400])); // Output: -1