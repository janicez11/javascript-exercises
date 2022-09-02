const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  if (array.length < 2) {
    return null;
  }
  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
};

const power = function(a, b) {
  let product = a;
  for (let i = 1; i < b; i++) {
    product *= a;
  }
  return product;
	
};

const factorial = function(a) {
  let product = 1;
  if (a == 0) {
    return 1;
  }
	for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
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
