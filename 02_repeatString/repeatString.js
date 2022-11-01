
const repeatString = function(string, times) {
    
    for (let i = 0; i < times ; i++){
        string += `hey`;
    }
    return string;
    
};
repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
