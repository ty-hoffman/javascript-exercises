const removeFromArray = function(inputArray, itemtoRemove1, itemtoRemove2) {
    args = Array.from(arguments);
    optionalArgs = args.slice(1);
    for (item in optionalArgs) {

        itemRemove = optionalArgs[item];

        if (inputArray.includes(itemRemove)) {
        itemIndex = inputArray.indexOf(itemRemove);
        inputArray.splice(itemIndex, 1);
        }
    }
    return inputArray;
};
// Do not edit below this line
module.exports = removeFromArray;