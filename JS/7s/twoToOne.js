// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My Soltuion
function longest(s1, s2) {
  let s3 = s1.split('').concat(s2.split(''))
  return s3.reduce(function (a, b) { if (a.indexOf(b) < 0) a.push(b); return a; }, []).sort().join('');

}


// Best Solution
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

// or

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}