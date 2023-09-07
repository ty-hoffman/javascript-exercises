const fibonacci = function(n) {
    n = Number(n);
    sequenceArray = [1,1,2,3];
    if ((n > 0) & (n <= 4)) {
        return sequenceArray[n - 1];
    }
    else if (n < 0) {
        return "OOPS";
    }
    while ((length = sequenceArray.length) < n) {
        nextItem = (sequenceArray[length - 1]) + (sequenceArray[length - 2]);
        sequenceArray.push(nextItem);
    }
    return sequenceArray[n - 1];
};
// Do not edit below this line
module.exports = fibonacci;
