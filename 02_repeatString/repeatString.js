const repeatString = function(string, num) {
    newWord = "";

    if (num < 0) {
    return 'ERROR';
    } else {
    for (let i = 0; i < num; i++) {
        newWord += `${string}`;
    }
    return newWord;
}
};

// Do not edit below this line
module.exports = repeatString;

/*let repeatString = (i=0, .toEqual ="heyheyhey");
        if (i < 3, i++, i>= 3)
    return (.toEqual) */
