const ftoc = function(f) {
  c = (f - 32)/1.8;
  return Number(c.toFixed(1));
};
ftoc(32) // fahrenheit to celsius, should return 0

const ctof = function(c) {
  f = (c * 1.8)+32;
  return Number(f.toFixed(1));
};
ctof(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
