// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// My Soltuion 

function numberToString(num) {
    let convert = `${num}`
    return convert
}

// Best Solution
function numberToString(num) {
    return num.toString();
}