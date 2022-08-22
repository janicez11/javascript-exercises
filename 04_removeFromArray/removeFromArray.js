const removeFromArray = function(myArray, x, ...moreArgs) {
    moreArgs.unshift(x);
    //console.log(moreArgs);
    
    for (let i = 0; i < myArray.length; i++) {
        for(let j = 0; j < moreArgs.length; j++) {
            if (myArray[i] === moreArgs[j]) {
                //console.log(myArray[i], moreArgs[j]);
                myArray.splice(i, 1);
                i--;
                //console.log(myArray);
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
