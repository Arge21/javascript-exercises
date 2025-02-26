const sumAll = function(numOne, numTwo) {
    let y = Math.sign(numOne, numTwo);
    if (y === -1 || NaN || null || numOne % 1 != 0 || numTwo % 1 != 0 || Array.isArray(numOne) || Array.isArray(numTwo) ||  typeof numOne == 'string' || typeof numTwo == 'string') {
        return `ERROR`
    }else {
        let smallest = Math.min(numOne, numTwo);
        let biggest = Math.max(numOne, numTwo);
        let i = smallest;
        let x = 0;
        while (i >= smallest && i < biggest) {
            // x = Math.floor(Math.random() * i) + i;
            x += i;
            i++;
        }
        return z = x + biggest;
    }

}
//use math.random
// Do not edit below this line
module.exports = sumAll;
