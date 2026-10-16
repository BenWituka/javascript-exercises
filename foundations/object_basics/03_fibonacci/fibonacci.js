const fibonacci = function(n) {
    let toggle = false;
    let prev1 = 1;
    let prev2 = 1;

    if (isNaN(Number(n)) || n <= 0) return "OOPS"; 

    for (let i = 3; i <= n; i++) {
        if (!toggle) {
            prev1 = prev1 + prev2;
            toggle = !toggle;
        }
        else {
            prev2 = prev1 + prev2;
            toggle = !toggle;
        }
    }
    return toggle ? prev1 : prev2;
};

// Do not edit below this line
module.exports = fibonacci;
