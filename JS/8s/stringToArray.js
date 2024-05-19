// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My Soltuion
function stringToArray(string) {
    return string.split(' ', string.length);
}


// Best Solution
function stringToArray(string) {
    return string.split(' ');
}