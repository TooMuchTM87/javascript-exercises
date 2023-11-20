const sumAll = function(numOne, numTwo) {
let bigNum = 0;
let smallNum = 0;
if ((numOne < 0 || numTwo < 0) || 
(Number.isInteger(numOne) === false ||
 Number.isInteger(numTwo) === false)) {
return "ERROR";
} else if (numOne > numTwo) {
    bigNum = numOne;
    smallNum = numTwo;
} else {
    bigNum = numTwo;
    smallNum = numOne;
}

let total = 0;
for (let i = smallNum; i <= bigNum; i++) {
    total += i;
}
return total;
};

// Do not edit below this line
module.exports = sumAll;
