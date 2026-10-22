// Q1
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Q2//
let n = 5;
let sum = 0;
let count = 1;
while (count <= n) {
    sum += count;
    count++;
}
console.log(`Sum of first ${n} natural numbers is: ${sum}`);

// Q3
console.log(`Multiplication Table for ${tableNum}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

// Q4
let factNum = 5;
let factorial = 1;
let fCount = factNum;
while (fCount > 0) {
    factorial *= fCount;
    fCount--;
}
console.log(`Factorial of ${factNum} is: ${factorial}`);

// Q5
console.log("Reverse Counting:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Q6
let maxN = 12;
let current = 1;
console.log(`Even numbers up to ${maxN}:`);
do {
    if (current % 2 === 0) {
        console.log(current);
    }
    current++;
} while (current <= maxN);

// Q7
let targetNum = 1234;
let trackingNum = targetNum;
let digitSum = 0;
while (trackingNum > 0) {
    digitSum += trackingNum % 10;
    trackingNum = Math.floor(trackingNum / 10);
}
console.log(`Sum of digits for ${targetNum} is: ${digitSum}`);

// Q8
let t1 = 0, t2 = 1;
console.log("First 10 terms of Fibonacci series:");
for (let i = 1; i <= 10; i++) {
    console.log(t1);
    let nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
}

// Q9
let mockGuesses =; 
let guessIndex = 0;
let userGuess;
do {
    userGuess = mockGuesses[guessIndex];
    console.log(`User guessed: ${userGuess}`);
    guessIndex++;
} while (userGuess !== correctNumber && guessIndex < mockGuesses.length);
console.log("Correct guess found!");

// Q10: Prime number check - Write a program using a for loop to check if a given number is prime.
let checkPrime = 17;
let isPrime = true;
if (checkPrime <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(checkPrime); i++) {
    if (checkPrime % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${checkPrime} is ${isPrime ? "a prime" : "not a prime"} number.`);
