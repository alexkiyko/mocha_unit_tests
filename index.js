module.exports = {sum, mult, isPalindrome, sortArrayUp};


function sum(a, b) {
    return a + b;
}

function mult (a, b) {
    return a * b;
}

function isPalindrome(str) {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

function sortArrayUp(arr){
    return arr.sort((a, b) => a - b);
}