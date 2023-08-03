const repeatString = function(text, n) {
    let finalString = ""

    if (n < 0) {
        return "ERROR";
    }

    for (i = 1; i <= n; i++) {
        finalString += text
    }
    
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
