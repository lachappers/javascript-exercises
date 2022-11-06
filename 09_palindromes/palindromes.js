const palindromes = (array) => {
    processedArray = array.toLowerCase().replace(/[^a-z]/g, "");    return processedArray == processedArray.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
