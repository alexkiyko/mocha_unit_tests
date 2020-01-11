function sum(a = 0, b = 0) {
    return a + b;
}

function mult(a = 0, b = 0) {
    return a * b;
}

function isPalindrome(str = '') {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

function sortArrayUp(arr = []) {
    return arr.sort((a, b) => a - b);
}

function oddOrEven(n) {
    return n % 2 === 0;
}

function makeUpperCase(str = '') {
    return str.toUpperCase(str);
}



module.exports = {sum, mult, isPalindrome, sortArrayUp, oddOrEven, makeUpperCase};
