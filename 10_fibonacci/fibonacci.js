const fibonacci = function(number) {
    num = parseInt(number);
    if (Math.sign(num) == -1) {
        return `OOPS`;
    } else {
        let sum = 0;
        let add = 1;
        for (i = 0; i < num; i++) {
            sum += add
            add = sum - add
        } return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
