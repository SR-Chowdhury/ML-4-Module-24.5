/**
 * Basic Sum by Loop
 */

let total = 0;
for (let i = 0; i <= 5; i++) {
    total += i; 
}

console.log(total);

/**
 * Basic Sum by Recusrsive function
 */

function sum(num) {
    if (num == 1) {
        return 1;
    }
    return num + sum(num - 1); 
}

let result = sum(5);
console.log(result);

/**
 * It works like:
 * num + sum(5-1) = 5 + sum (4)
 * 5 + num + sum(4 - 1) = 5 + 4 + sum (3)
 * 5 + 4 + num + sum(3 - 1) = 5 + 4 + 3 + sum (2)
 * 5 + 4 + 3 + num + sum(3 - 1) = 5 + 4 + 3 + 2 + sum (1) [codition matched and returned 1]
 * 5 + 4 + 3 + 2 + 1 = 15
 */

/**
 * Basic Prime Number by Loop
 */

let n = 1;
for (let i = 1; i<=5; i++) {
    n *= i;
}
console.log("5! = "+ n);

/**
 * Basic Prime Number by recursive function
 */

function primeNumber(p) {
    if (p == 1) {
        return 1;
    }
    return p * primeNumber(p - 1);
}

let prime = primeNumber(5);
console.log(prime);