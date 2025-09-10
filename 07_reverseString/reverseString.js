const reverseString = function(a) {
    let reversed = '';
    // start from the last character and move backwards
    for (let i = a.length - 1; i >= 0; i--) {
      reversed += a[i];  // add each character to the new string
    }
    return reversed;
  };

// Do not edit below this line
module.exports = reverseString;
