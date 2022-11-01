const leapYears = function(leapYear) {

   if ((leapYear % 4 === 0) && (leapYear % 100 !== 0) || (leapYear % 400 === 0)){
    return isLeapYear = true;
   }
   else{
    return isLeapYear = false;
   }
};

// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;


    // else if (leapYear % 400 ===0) {
    //     return isLeapYear = true;
    // }
    // else { 
    //     return isLeapYear = false;}
    // let isLeapYear = (
    //     (leapYear % 4 ===0) && 
    //     (
    //         (leapYear % 400 ===0) &&
    //         !!(leapYear % 100 ===0)
    //         );