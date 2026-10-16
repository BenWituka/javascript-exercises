const findTheOldest = function(arr) {
    oldest =  arr.reduce ((oldest, person) => {
        if (person.yearOfDeath) age = person.yearOfDeath - person.yearOfBirth;
        else age = new Date().getFullYear() - person.yearOfBirth;
        return age > oldest.age ? {age, person} : oldest;
    }, {age: -Infinity, person: {}});
    return oldest.person;
};

// Do not edit below this line
module.exports = findTheOldest;
