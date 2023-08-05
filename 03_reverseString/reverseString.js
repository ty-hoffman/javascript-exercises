const reverseString = function(input) {
    string = input.toString();
    stringArray = string.split("");
    stringArrayReversed = stringArray.reverse();
    stringReversed = stringArrayReversed.join("");
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
