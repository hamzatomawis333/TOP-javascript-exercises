const palindromes = function (string) {
    
    let cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
  };
  
  // Do not edit below this line
  module.exports = palindromes;
  