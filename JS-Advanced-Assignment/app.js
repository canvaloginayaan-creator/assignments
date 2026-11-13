// Q1: Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.
function squareNumbers(arr) {
  return arr.map((n) => n * n);
}
console.log("Q1:", squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]


// Q2: Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.
function filterAdults(users) {
  return users.filter((user) => user.age > 18);
}
const users = [
  { name: "Ali", age: 17 },
  { name: "Sara", age: 22 },
  { name: "Ahmed", age: 18 },
  { name: "Zara", age: 30 },
];
console.log("Q2:", filterAdults(users)); // Sara, Zara


// Q3: Given an array of products with price, use reduce to calculate the total price of all products.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
];
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Q3: Total price =", totalPrice); // 2150


// Q4: Create an array of students with marks. Sort the array in descending order based on marks.
const students = [
  { name: "Hassan", marks: 78 },
  { name: "Ayesha", marks: 92 },
  { name: "Bilal", marks: 85 },
  { name: "Fatima", marks: 67 },
];
const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
console.log("Q4:", sortedStudents); // Ayesha, Bilal, Hassan, Fatima


// Q5: Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.
function findLongString(arr) {
  return arr.find((str) => str.length > 5);
}
console.log("Q5:", findLongString(["cat", "apple", "banana", "watermelon"])); // "banana"


// Q6: Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword. Explain how this works in this context.
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("Q6:", person.fullName()); // "John Doe"
// Explanation: When a method is called as person.fullName(), the object before the
// dot (person) becomes the value of `this` inside that function. So this.firstName
// is person.firstName and this.lastName is person.lastName.


// Q7: What will be the output of this code and why? Create an example to show the difference between regular function and arrow function when using this inside an object.
const user = {
  name: "Sara",
  regularFunction: function () {
    return "Regular: " + this.name;
  },
  arrowFunction: () => {
    return "Arrow: " + this.name;
  },
};
console.log("Q7:", user.regularFunction()); // "Regular: Sara"
console.log("Q7:", user.arrowFunction()); // "Arrow: undefined"
// Why: A regular function gets its own `this`, decided by how it is called.
// Here user.regularFunction() is called on `user`, so this = user.
// An arrow function has no `this` of its own. It uses the `this` from the
// surrounding scope where it was written. An object literal does not create a
// scope, so `this` is the outer/global value (window in a browser, where
// window.name is an empty string or undefined), NOT the user object.
// Rule: use regular functions for object methods, arrow functions for callbacks.


// Q8: Write a function that takes an array of numbers, filters even numbers, then doubles them using map, and finally returns the sum of those doubled numbers using reduce. Do it in a chain.
function sumOfDoubledEvens(arr) {
  return arr
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((sum, n) => sum + n, 0);
}
console.log("Q8:", sumOfDoubledEvens([1, 2, 3, 4, 5, 6])); // (2+4+6)*2 = 24


// Q9: Create an array of employees with name, department and salary. Write code to:
// a) Find an employee who works in HR department
// b) Sort employees by salary in ascending order
const employees = [
  { name: "Usman", department: "IT", salary: 90000 },
  { name: "Maria", department: "HR", salary: 70000 },
  { name: "Kamran", department: "Finance", salary: 80000 },
  { name: "Nida", department: "HR", salary: 65000 },
];

// a) Find an employee who works in HR department
const hrEmployee = employees.find((emp) => emp.department === "HR");
console.log("Q9a:", hrEmployee); // Maria (first match)

// b) Sort employees by salary in ascending order
const sortedEmployees = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Q9b:", sortedEmployees); // Nida, Maria, Kamran, Usman


// Q10: Create a function that takes an object and returns an array of its keys and values separately, then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.
function splitObject(obj) {
  return [Object.keys(obj), Object.values(obj)];
}
const car = { brand: "Toyota", model: "Corolla", year: 2022 };
const [keys, values] = splitObject(car);
console.log("Q10 keys:", keys); // ["brand", "model", "year"]
console.log("Q10 values:", values); // ["Toyota", "Corolla", 2022]

const pairs = [
  ["name", "Ali"],
  ["age", 25],
  ["city", "Karachi"],
];
const newObject = Object.fromEntries(pairs);
console.log("Q10 fromEntries:", newObject); // { name: "Ali", age: 25, city: "Karachi" }
