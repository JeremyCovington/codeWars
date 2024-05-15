// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.



// My Soltuion

function removeChar(str) {
    return str.slice(1, str.length - 1);
};


// Best Solution
function removeChar(str) {
    return str.slice(1, -1);
}