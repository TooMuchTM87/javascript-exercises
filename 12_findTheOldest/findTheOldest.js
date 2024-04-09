const findTheOldest = function(person) {
   return person.reduce((a, b) => {
    const one = age(a.yearOfBirth, a.yearOfDeath);
    const two = age(b.yearOfBirth, b.yearOfDeath);
    if (one < two) {
        return b;
    } else {
        return a;
    };
   });
};

const age = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
