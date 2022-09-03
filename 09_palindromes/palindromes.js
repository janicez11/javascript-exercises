const palindromes = function (string) {
    
    var regex = /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    var cleanString = string.replace(regex, '');
    cleanString = cleanString.toLowerCase();
    cleanArray = Array.from(cleanString);
    
    arrayMid = Math.floor(cleanArray.length/2);

    for (let i = 0; i < arrayMid; i++) {
        if (cleanArray[i] != cleanArray[cleanArray.length - (i+1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
