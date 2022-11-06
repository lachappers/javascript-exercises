// const input = [0,0];

// const add = (a, b) => {
//   input.reduce((a, b) => {
//     return a + b;
//   }, 0);
// };
// add(input);


const add = (a, b) => a + b;

const subtract = (a,b) => a-b;

const sum = (array) => {
  return array.reduce((a,b) => a + b, 0);
};

const multiply = (array) => {
  return array.reduce((a,b) => a*b);
  };

// in solution : 
    // const multiply = function(array) {
    // return array.length
    // ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    // : 0;
    // };

const power = (a,b) => Math.pow(a,b);


// const factorial = function(n) {
// 	if(n ===0 ){
//     return 1;
//   }
//   return n*factorial(n-1);
// };

const factorial = (n) => n ===0 ? 1 : n*factorial(n-1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
