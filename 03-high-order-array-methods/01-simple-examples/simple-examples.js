const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num) => num * 2);
console.log(`Double Numbers: ${doubledNumbers}`);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(`Even Number: ${evenNumbers}`);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`Sum using reduce: ${sum}`);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => console.log(`ForEach: ${num}`));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
foundNumber = numbers.find((num) => num % 2 === 1);
console.log(`Found number: ${foundNumber}`);
foundNumberIndex = numbers.findIndex((num) => num % 2 === 1);
console.log(`Found number index: ${foundNumberIndex}`);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
someNumber = numbers.some((num) => num % 4 === 0);
console.log(`Some number: ${someNumber}`);

/**
 * sort: Checks if at least one array element satisfies a condition.
 */
sortDesc = numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(`Sort numbers in Descending order: ${sortDesc}`);

/**
 * reverse: Checks if at least one array element satisfies a condition.
 */
reversedNumber = numbers.reverse();
console.log(`Reversed numbers: ${reversedNumber}`);

/**
 * includes: Checks if at least one array element satisfies a condition.
 */
includesNumber = numbers.includes(5);
console.log(`Includes number: ${includesNumber}`);

/**
 * every: Checks if all array elements satisfy a condition.
 */
passesTest = numbers.every((num) => num % 2 === 0);
console.log(`Every: ${passesTest}`);
