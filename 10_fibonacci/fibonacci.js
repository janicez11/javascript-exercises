const fibonacci = function(member) {
    let array = [1, 1];
    let sum = 0;

    if (member > 0) {
        for ( let i = 2; i < member; i++) {
            sum = array[i-2] + array[i-1];
            array.push(sum);
        }
        return array[member-1];
    }
    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
