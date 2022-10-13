// Duplicate Zeros
// Given a fixed-length integer array, duplicate each occurrence of zero, shifting the remaining elements to the right.
// NOTE that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:
// Input:
// Output: [1,0,0,2,3,0,0,4,5];


// Time O(n^2)
// Space O(1)
arr = [1, 0, 2, 3, 0, 4, 5, 0];
arr2 = [1, 2, 3];

const N = arr.length;
for (let i = 0; i < N - 1; i++) {
  if (arr[i] === 0) {
    let prev = arr[i + 1];
    for (let j = i + 2; j < N; j++) {
      let temp = arr[j];
      arr[j] = prev;
      prev = temp;
    }
    arr[++i] = 0;
  }
}

console.log(arr); // Output: [1,0,0,2,3,0,0,4]
console.log(arr2); // Output: [1,2,3]
