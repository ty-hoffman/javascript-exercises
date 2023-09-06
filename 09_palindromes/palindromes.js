const palindromes = function (string) {
    string = string.toLowerCase();
    stringUpdated = string.replace(/[^a-z0-9]/g, "")
    stringArray = stringUpdated.split("");
    stringReversedArray = stringArray.reverse();
    stringReversed = stringReversedArray.join("");
    result = stringUpdated === stringReversed ? true : false;
    return result;
}
// Do not edit below this line
module.exports = palindromes;
