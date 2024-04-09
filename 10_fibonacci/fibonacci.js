const fibonacci = function(x) {
    let a = 1;
    let b = 1;
    if (x < 0) {
        return "OOPS";
    }else{
        for (let i = 3; i <= x; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;    
    }
};

// Do not edit below this line
module.exports = fibonacci;
