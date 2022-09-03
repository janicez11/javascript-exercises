const findTheOldest = function(list) {
    let max = 0;
    let index = 0;
    let yearOld;

    for (let i = 0; i < list.length; i++) {
        if (list[i].yearOfDeath === undefined) {
            let yearNow = new Date();
            yearNow = yearNow.getFullYear();
            //console.log(yearNow);
            yearOld = yearNow - list[i].yearOfBirth;
        }
        else {
            yearOld = list[i].yearOfDeath - list[i].yearOfBirth;
        }
        
        if (yearOld > max) {
            max = yearOld;
            index = i;
        }
    }
    return list[index];
};

// Do not edit below this line
module.exports = findTheOldest;
