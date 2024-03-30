const palindromes = function (x) {
   let a = x.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
   let arr = a.split('').reverse().join('');
if (arr === a) {
return true;
} else {
    return false;
};
}

// Do not edit below this line
module.exports = palindromes;
