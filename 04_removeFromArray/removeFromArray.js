const removeFromArray = function(theArr, theArgs) {
    if (theArr.includes(theArgs,0)){
        popper = theArr.indexOf(theArgs,0);
        theArr.splice(popper,1);
    }
    
    return theArr;
};
removeFromArray([1, 2, 3, 4], 3, 5);

// Do not edit below this line
module.exports = removeFromArray;
