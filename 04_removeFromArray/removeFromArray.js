const removeFromArray = function(theArr, ...theArgs) {
   for (let arg of theArgs){
        if (theArr.includes(arg,0)){
            popper = theArr.indexOf(arg,0);
            theArr.splice(popper,1);
        }
        return theArr;
};
removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;