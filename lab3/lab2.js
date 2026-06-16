'use strict';

// 1. Function pow(x, n) - returns x to the power of n (n is integer)
function pow(x, n) {
    if (n === 0) return 1;
    if (n > 0) {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
    // for negative exponents: x^(-n) = 1 / (x^n)
    return 1 / pow(x, -n);
}

// 2. Function sumTo(n) - using "new Function" syntax
// Calculates sum from 1 to n inclusive
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

// 3. Function isLeapYear(year) - checks if year is a leap year
// Leap year if divisible by 400, OR (divisible by 4 AND not divisible by 100)
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// 4. Function factorial(n) - recursive, returns BigInt
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

// 5. Function fib(n) - returns nth Fibonacci number as BigInt
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    
    let prev = 0n;
    let curr = 1n;
    
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

// 6. Function compare(x) - returns anonymous function that compares y with x
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

// 7. Function sum(...) - returns sum of all arguments
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// 8. Function addBlackSpot(obj) - adds Symbol.for('blackSpot') property with value true
function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}