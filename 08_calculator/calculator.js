const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
return arr.reduce((multiply, current) => multiply * current);
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
  let y = 1;
 if (x === 0) {
  return 1;
 } else {
  for (let i = x; i > 0; i--) {
    y *= i;
  }
  return y;
 }
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
