
function isPrime(num) {
  num = Math.abs(num);
  
  if (num === 0 || num === 1) {
    return false;
  }
  else if (num === 2) {
    return true;
  }
  
  else {
    var i;
    var possibleDivisors = [];
    for (i = 2; i <= Math.round(Math.sqrt(num)); i++) {
      if (i === 2 || i % 2 !== 0) {
        possibleDivisors.push(i);
      }
    }
    console.log(possibleDivisors);
    
    for (i = 0; i < possibleDivisors.length; i++) {
      if (num % possibleDivisors[i] === 0) {
        return false;
      }	
	}
	return true;
  }
}

console.log(isPrime(-41));
