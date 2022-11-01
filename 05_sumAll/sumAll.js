const sumAll = function(first, last) {
    let max = Math.max(first, last);
    let min = Math.min(first, last);
    sumOfAll = ((max-min)+1)*((min + max)/2);
    return sumOfAll;
};

sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
