const leapYears = function(leapYear) {
    // divisible by 4, not divisible by 100, divisible by 400
    let isLeapYear = ((leapYear % 4 ===0) && !(leapYear % 100 ===0) && (leapYear % 400 ===0));
    return isLeapYear;

};

leapYears(2000) // is a leap year: returns true
leapYears(1985)

// Do not edit below this line
module.exports = leapYears;
