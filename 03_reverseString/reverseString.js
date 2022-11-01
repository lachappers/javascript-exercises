const reverseString = function(input) {
    let arr = input.split('');
    let reverseInput = arr.reverse();
    return reverseInput;
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
