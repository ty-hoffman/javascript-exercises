const sumAll = function(startNum, endNum) {
    if ((typeof (startNum) !== "number" || typeof (endNum) !== "number") || (startNum < 0 || endNum < 0)) {
        return "ERROR";
    }
    finalSum = 0;

    // switching variables
    if (startNum > endNum) {
        tmp = startNum;
        startNum = endNum;
        endNum = tmp;
    }

    numberToAdd = startNum;
    while (numberToAdd <= endNum) {
        finalSum += numberToAdd;
        numberToAdd++;
    }
    return finalSum;
};
// Do not edit below this line
module.exports = sumAll;
