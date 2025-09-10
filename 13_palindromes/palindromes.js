const palindromes = function (string) {
    // normalize: lowercase + remove non-alphanumeric
    let cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // reverse
    let reversed = cleaned.split('').reverse().join('');
    
    // compare
    return cleaned === reversed;
  };
  
  // Do not edit below this line
  module.exports = palindromes;
  