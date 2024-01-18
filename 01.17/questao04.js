const prompt = require('prompt-sync')();

function isPrime() {
    const num = parseInt(prompt('Digite um número:'));
  
    if (isNaN(num) || num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  console.log(`${isPrime()}`);