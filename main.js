// Length of Last word

//Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1: 
const s = "Hello World";

// Time O(n^2)

const lastWordLength = function(s) {
  // using trim method to remove spaces in the beggining or end, then - splitting words
  let dividedWords = s.trim().split(' ');

  // removing last element from these words, if there is no element we return 0;
  const lastWord = dividedWords.pop() || '';

  return lastWord.length;
}


// Example 1: 
// console.log(lastWordLength(s));

// Output: 5


// Example 2:
// s = "   fly me   to   the moon  "
// Output: 4;

// Example 3: 
// s = "luffy is still joyboy"

// Output: 6;

console.log(lastWordLength(s));

// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Time: O(n)

// Example 1:
// const s = "abc";
// const t = "ahbgdc";
// Output: true

const isSubsequence = function(s, t) {
  let i = 0
  let j = 0;
  // while they are within the ranges
  while (i < s.length && j < t.length) {
    // we compare then: if left side has same characters as right, we move them both forward:
    if (s[i] === t[j]) {
      i += 1
      j += 1

      // if not, we move right forward till it finds same characters
    } else {
      j += 1
    }
  }

  return i === s.length
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false