const palindromes = function (string) {
    const pattern = /[.,! ]/g;
    testStr = string.replaceAll(pattern, "").toLowerCase();
    const length = testStr.length;
    const start = testStr.slice(0,Math.floor(length / 2));
    const end = testStr.slice(Math.floor((length + 1)/ 2));
    const endReversed = [...end].reverse().join("");
    return start === endReversed;
};

// Do not edit below this line
module.exports = palindromes;
