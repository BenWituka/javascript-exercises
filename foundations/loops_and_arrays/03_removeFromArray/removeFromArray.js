const removeFromArray = function(inputArray, ...toBeRemoved) {
    return inputArray.filter(el => !toBeRemoved.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
