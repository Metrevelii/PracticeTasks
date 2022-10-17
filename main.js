// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Example 1: x = 123
// Output: 321
// Big O - O(n^2)

let reverse = function(x) {
  // Convert value to string
  const str = "" + Math.abs(x);
  // Get array of digit characters, reverse it and join into a string again by using chaining method
  const reversed = str.split("").reverse().join("");
  const num = parseInt(reversed); // Convert back to integer
  const revNum = Math.sign(x) * num;
  // If number is out of range - return 0
  if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) -1) return;
  return revNum;
}

console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21

 