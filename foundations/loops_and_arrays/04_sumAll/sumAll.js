const sumAll = function(firstBound, secondBound) {
    let sum = 0;
    let lowerBound, upperBound;

    if (isNaN(firstBound)) {
        return "ERROR";
    }

    if (isNaN(secondBound)) {
        return "ERROR";
    }

    if (firstBound < 0) {
        return "ERROR";
    }

    if (secondBound < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(firstBound)) {
        return "ERROR";
    }

    if (!Number.isInteger(secondBound)) {
        return "ERROR";
    }

    if (firstBound < secondBound) {
        lowerBound = firstBound;
        upperBound = secondBound;
    }
    else {
        lowerBound = secondBound;
        upperBound = firstBound;
    }
    for (let n = lowerBound; n <= upperBound; n++) {
        sum += n;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
