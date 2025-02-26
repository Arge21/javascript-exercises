const reverseString = function(string) {
    let newString = string.split('').reverse().join('');
    return newString;
    
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
