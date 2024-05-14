// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My Soltuion 
function accum(s) {
    let sting = s.toLowerCase()
    const repeatedString = Array.from(sting).map((char, index) => {
        let str = char.repeat(index + 1);
        return str.charAt(0).toUpperCase() + str.slice(1);
    }).join("-"); // Join the array back into a string

    return repeatedString;
}


// Best Solution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}