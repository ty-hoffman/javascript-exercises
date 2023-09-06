const add = function(num1, num2) {
  addition_sum = num1 + num2;
  return addition_sum;
};

const subtract = function(num1, num2) {
	difference = num1 - num2;
  return difference;
};

const sum = function(array) {
	sumResult = array.reduce((sum, currentElement) => sum + currentElement, 0);
  return sumResult;
};

const multiply = function(array) {
  productFinal = array.reduce((product, currentElement) => product * currentElement, 1);
  return productFinal;
};

const power = function(num1, exponent) {
  result = num1 ** exponent;
	return result;
};

const factorial = function(num1) {
  result = 1;
  for (i = num1; i>0; i--) {
    result *= i;
  }
	return result;
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
