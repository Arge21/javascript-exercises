const add = function(...args) {
  let sum = 0;
  if (Array.isArray(args) == true) {
      flattenArgs = args.flat();
  } 
  for (let arg of flattenArgs) sum += arg;
  return sum;
};

const subtract = function(numberOne, ...args) {
  let sum = 0;
  for (let arg of args) numberOne -= arg;
  return sum + numberOne;
};

const sum = function(...args) {
  let sum = 0;
  flattenArgs = args.flat();
  for (let arg of flattenArgs) sum += arg;
  return sum;
};

const multiply = function(...args) {
  let sum = 1;
  flattenArgs = args.flat(Infinity);
  for (let arg of flattenArgs) sum *= arg;
  return sum;
};

const power = function(numberOne, power) {
  return numberOne **= power;

};

const factorial = function(number) {
  let sum = 1;
  for (i = 1; i <= number; i++) {
    sum *= i;
  } return sum;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
