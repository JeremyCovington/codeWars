// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My Soltuion
function solution(str, ending) {
  return str.endsWith(ending) ? true : false
}


// Best Solution
function solution(str, ending) {
  return str.endsWith(ending);
}