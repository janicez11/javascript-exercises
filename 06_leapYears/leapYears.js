const leapYears = function(year) {
    

    if ( year%4 == 0) {
        //console.log("divisible by 4")
       if (year%100 == 0 && year%400 == 0) {
            //console.log("divisible by both")
            return true;
        }
        else if (year%100 != 0) {
            return true;
        }
        else {
            return false;
        }      
    }
    else {
        return false;
    }
   

   
};

// Do not edit below this line
module.exports = leapYears;
