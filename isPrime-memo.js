var isPrime = (function(primes) {
    var isValidPrime = function(c) {
        // possible divisors are any prime whose square is >= candidate
        var possibleDivisors = primes.filter(function(p) {
            return c >= p * p;
        });
        return !possibleDivisors.some(function(d) {
            return c % d === 0;
        });
    };
    
    var getNextPrime = function() {
        var candidate = primes[primes.length-1] + 2;
        while (!isValidPrime(candidate)) {
            candidate += 2;
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
