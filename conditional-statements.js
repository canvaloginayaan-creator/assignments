// Q1
let num1 = 15;
if (num1 > 0) {
    console.log(`${num1} is positive.`);
} else if (num1 < 0) {
    console.log(`${num1} is negative.`);
} else {
    console.log("The number is zero.");
}

// Q2
if (num2 % 2 === 0) {
    console.log(`${num2} is even.`);
} else {
    console.log(`${num2} is odd.`);
}


// Q3
let a = 25, b = 42;
if (a > b) {
    console.log(`The larger number is ${a}`);
} else if (b > a) {
    console.log(`The larger number is ${b}`);
} else {
    console.log("Both numbers are equal.");
}

// Q4
let score = 85;
let grade;
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else if (score >= 60) grade = 'D';
else grade = 'F';
console.log(`Score: ${score}%, Grade: ${grade}`);

// Q5
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

// Q6
let dayNum = 3;
switch (dayNum) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day number.");
}

// Q7
let numA = 10, numB = 5, operation = '+';
switch (operation) {
    case '+': console.log(`${numA} + ${numB} = ${numA + numB}`); break;
    case '-': console.log(`${numA} - ${numB} = ${numA - numB}`); break;
    case '*': console.log(`${numA} * ${numB} = ${numA * numB}`); break;
    case '/': console.log(`${numA} / ${numB} = ${numB !== 0 ? numA / numB : "Cannot divide by zero"}`); break;
    default: console.log("Invalid operation.");
}

// Q8
let char = 'e';
switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`${char} is a vowel.`);
        break;
    default:
        console.log(`${char} is a consonant.`);
}

// Q9
let light = 'Yellow';
switch (light.toLowerCase()) {
    case 'red': console.log("Stop"); break;
    case 'yellow': console.log("Wait"); break;
    case 'green': console.log("Go"); break;
    default: console.log("Invalid traffic light color.");
}

// Q10
let menuChoice = 1;
switch (menuChoice) {
    case 1: console.log("Action Selected: Check Balance"); break;
    case 2: console.log("Action Selected: Deposit"); break;
    case 3: console.log("Action Selected: Withdraw"); break;
    case 4: console.log("Action Selected: Exit"); break;
    default: console.log("Invalid Selection. Choose 1-4.");
}
