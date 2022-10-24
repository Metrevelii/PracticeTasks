// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1: s = "A man, a plan, a canal: Panama";
// Output: true

// const s = "A man, a plan, a canal: Panama";
// const toCleanerStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();


// const isPalindrome = (string) => {
//   const cleanStr = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   string === cleanStr.split('').reverse().join();
//   console.log(string, cleanStr);
// }

// console.log(isPalindrome(s));
// console.log(s.replace(/[^a-z0-9]/gi, '').toLowerCase());

// console.log(isPalindrome(s));


// console.log(isPalindrome('fof'));


// Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1: Input: s = 'aba'
// Output: true

// Youtube videos shemdeg amoxsna:

const isPalindrome = function(s) {
  // Creating left pointer and assigning it to 0
  let leftPointer = 0;
  // Creating right pointer - assigning it to s.lenght - 1
  let rightPointer = s.length - 1;
  while (leftPointer < rightPointer) {
    // If the values of pointer are not equal: find palindrome with leftPointer + 1 and rightPointer - 1 - return if any of them is true
    if(s[leftPointer] !== s[rightPointer]) {
      const checkLeft = checkInnerPalindrome(leftPointer + 1, rightPointer, s)
      const checkRight = checkInnerPalindrome(leftPointer, rightPointer - 1, s)
      return checkLeft || checkRight
    }
    leftPointer++
    rightPointer--
  }
}

const checkInnerPalindrome = function(leftPointer, rightPointer, s) {
  while (leftPointer < rightPointer) {
    if(s[leftPointer] !== s[rightPointer]) {
      return false
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

// Time complexity O(n)

