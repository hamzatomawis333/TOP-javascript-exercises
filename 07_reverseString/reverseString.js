const reverseString = function(a) {
    let reversed = '';
    
    for (let i = a.length - 1; i >= 0; i--) {
      reversed += a[i];  
    }
    return reversed;
  };

// Do not edit below this line
module.exports = reverseString;
