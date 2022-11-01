
const repeatString = function(string, num) {
    midString = '';
    if (num <0){
        midString = 'ERROR';
    }
    else{
        for (let i = 0; i < num ; i++){
            midString += string;
        }
    }
        return string = midString;
    
};
repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;



/* BAACKUP

const repeatString = function(string, num) {
   
    if (num <0){
        string = 'ERROR';
    }
    else{
         for (let i = 0; i < num ; i++){
            secondString += string;
        }
        return secondString;
    }
    
};
repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
*/