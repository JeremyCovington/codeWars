// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// My Soltuion 
function isPalindrome(x) {
  const lowerX = x.toLowerCase()
  const rev = lowerX.split("").reverse().join("")
  if (lowerX === rev) {
    return true;
  } else {
    return false;
  }
}


// Best Solution
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}