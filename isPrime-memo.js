var isPrime = (function(primes) {
    var candidate, possibleDivisors;
    var isValidPrime = function(c) {
        // possible divisors are any prime whose square is >= candidate
        possibleDivisors = primes.filter(function(p) {
            return c >= p * p;
        });
        return !possibleDivisors.some(function(d) {
            return c % d === 0;
        });
    };
    
    var nextCandidate = function(candidate) {
        return candidate += candidate % 10 === 3 ? 4 : 2;
    };
    
    var getNextPrime = function() {
        candidate = primes[primes.length-1] + 2;
        while (!isValidPrime(candidate)) {
            candidate = nextCandidate(candidate);
        }
        return candidate;
    };
    
    return function(n) {
        if (typeof n === 'number') {
            while (primes[primes.length-1] < Math.sqrt(n)) {
                primes.push(getNextPrime());
            }
            return isValidPrime(n);
        }
        return false;
    };
}([2,3]));

console.log(isPrime(123456783));
