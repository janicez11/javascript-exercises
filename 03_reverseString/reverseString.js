const reverseString = function(string) {
    let array = string.split("").reverse().toString();
    array = array.replace(/,/g, "");
    return array;
};

// Do not edit below this line
module.exports = reverseString;
