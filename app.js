/*
const person = {
  name: 'miyaad',
  birthYear: 1999,
};

const me = Object.assign({}, person);
me.name = 'joy';

// console.log(person);
// console.log(me);

// array destructuring

const arr = [1, 2, 3, 4, 5];
// const [x = -1, y = -1, z = -1] = [...arr.slice(0, 2)];
// console.log(x, y, z);

// object destructuring
const { name: firstName, birthYear: birth, lastName = 'schmedtman' } = person;

// console.log(firstName, birth, lastName);

// spread operator

const newArr = [...arr, 6, 7];
const personCopy = { ...person };
personCopy.name = 'joy';

// console.log(newArr);
// console.log(person);

// rest pattern

const [a, b, ...rest] = arr;
// console.log(a, b, rest); // rest -> array

// Looping Objects, Object keys, Object values and Object entries

const joy = {
  firstName: 'miyaad',
  lastName: 'shah',
  birthYear: 1999,
  job: 'student',
};
delete joy.lastName;
// console.log(joy);
// console.log(Object.keys(joy));
// console.log(Object.values(joy));
// console.log(Object.entries(joy));
// for (const [key, value] of Object.entries(joy)) {
//   console.log('key: ' + key, 'value: ' + value);
// }

const fruits = [
  '🥭',
  '🍎',
  '🍌',
  '🍍',
  '🍉',
  '🍈',
  '🍏',
  '🍋',
  '🍌',
  '🍍',
  '🍎',
  '🥭',
  '🍒',
  '🍒',
  '🍓',
  '🍓',
  '🍓',
];

const fruitsSet = new Set(fruits);

// console.log(fruitsSet);
// console.log(fruitsSet.size);
// console.log(fruitsSet.add('🍑'));
// console.log(fruitsSet.delete('🍌'));
// console.log(fruitsSet.has('🥭'));

const newMap = new Map();
newMap.set('firstName', 'miyaad');
newMap.set('lastName', 'shah');
newMap.set('birthYear', 1999);
// console.log(newMap.delete('lastName'));
// console.log(newMap);

const personMap = new Map(Object.entries(joy));
// console.log(personMap);

// console.log([...personMap]);

//String methods

const str = 'my name is miyaad j';
*/
// console.log(str.indexOf('m', 1));

// console.log(str.slice(-3));
// console.log(str.slice(3, -1));
// console.log(typeof new String('miyaad'));

// console.log(str.toUpperCase());
// console.log(str.toLocaleUpperCase('CAN'));
/*
console.log(
  str.replaceAll('i', function () {
    console.log("an 'i' occured");
    return '|';
  })
);
*/

// 3 string methods that returns booleans
// console.log(str.includes('p'));
// console.log(str.startsWith('m'));
// console.log(str.endsWith('k'));

// console.log(str.split(''));

// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr2.join('-'));

// padding a string

// const n1 = prompt('enter a number: ');
// const n2 = prompt('Enter another number: ');

// const division = n1 / n2;
// let [x, y] = division.toFixed(2).split('.');
// x = x.padStart(2, '0');
// y = y.padEnd(2, '0');
// console.log([x, y].join('.'));

// console.log('Lei'.repeat(10));
/*
/**
 * A description of the entire function.
 *
 * @param {string} greetings - description of parameter
 * @return {function} description of return value
 */
/*
function greet(greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
}

const sayHi = greet('Hi');
// sayHi('Taara');
// console.dir(sayHi);

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
// console.log(double(35));

function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const count = counter();
// console.log(count());
// console.log(count());
// console.log(count());

/*
const introduce = function (address) {
  console.log(
    `HI! My name is ${
      this.name
      }. I am ${this.calcAge()} years old. I live in ${address}`
      );
      };
      
      // introduce.call(person, 'New Market, Rajshahi.');
      */
/*
const person = {
  name: 'Miyaad',
  birthYear: 1999,
  calcAge: function () {
    return 2024 - this.birthYear;
  },

  job: 'student',
};
const introduce = function (address, language) {
  console.log(
    `HI! My name is ${this.name}. I am ${this.calcAge()} years old. I am a ${
      this.job
    } and I speak ${language}. I live in ${address}.`
  );
};
const introduceYourself = introduce.bind(
  person,
  'Rajshahi, Bangladesh',
  'Bengali'
);

// introduceYourself();
const arr = [3, 5, 7, 9, 11];
// console.log(arr.slice(-2));

// console.log(arr.splice(2, 2));
// console.log(arr);

// const reverseArr = arr.reverse();
// console.log(reverseArr);
// console.log(+arr.join(''));

// console.log(arr.at(3));

// forEach() -> a higher order function

// arr.forEach((cur, i, array) => console.log(cur, i, array));
/*
const newMap = new Map();
newMap.set('firstName', 'miyaad');
newMap.set('lastName', 'shah');
newMap.set('birthYear', 1999);

const fruits = [
  '🥭',
  '🍎',
  '🍌',
  '🍍',
  '🍉',
  '🍈',
  '🍏',
  '🍋',
  '🍌',
  '🍍',
  '🍎',
  '🥭',
  '🍒',
  '🍒',
  '🍓',
  '🍓',
  '🍓',
];

const fruitsSet = new Set(fruits);

// newMap.forEach((value, key, map) => console.log(value, key));

// fruitsSet.forEach((value, key) => console.log(value, key));

// console.log(arr.map(el => el * 2));

const arr2 = [null, undefined, 1, '', 3, 5, {}, NaN];
// console.log(arr2.filter(el => el));

// console.log(arr.reduce((accum, el) => accum + el, 0));

// 1. Using map() to Extract Properties from Objects in an Array
// const users = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Jane', age: 28 },
//   { id: 3, name: 'Jack', age: 32 },
// ];

// console.log(
//   users.map(user => {
//     return user.id;
//   })
// );

// 2. Using map() with Index and Array Parameters

// const numbers = [10, 20, 30, 40];

// console.log(numbers.map((number, index) => `Index ${index}: ${number}`));

// Using map() to Flatten a Nested Array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArray = [];

nestedArray.forEach(arr => flattenedArray.push(...arr));
// console.log(flattenedArray);

// 3. Using map() to Convert Data Types
const stringNumbers = ['1', '2', '3', '4', '5'];

console.log(stringNumbers.map(num => Number(num)));

// 4. Using map() to Perform Complex Transformations
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 700 },
];

const formattedProducts = products.map(product => ({
  productId: product.id,
  productName: product.name.toUpperCase(),
  productPrice: `$${product.price.toFixed(2)}`,
}));

// console.log(formattedProducts);

// 1. Filtering Objects Based on Nested Properties

const users = [
  { id: 1, name: 'John', address: { city: 'New York' } },
  { id: 2, name: 'Jane', address: { city: 'Los Angeles' } },
  { id: 3, name: 'Jack', address: { city: 'New York' } },
];

// console.log(users.filter(user => user.address.city === 'New York'));

// 2. Filtering Unique Values
const numbers = [1, 2, 2, 3, 4, 4, 5];

// console.log(
//   numbers.filter((num, i, numbers) => numbers.lastIndexOf(num) === i)
// );

// 3. Filtering Arrays of Arrays
const arrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

// console.log(arrays.filter(array => array.length > 2));

// 4. Filtering Objects with Multiple Conditions
const products = [
  { id: 1, name: 'Laptop', price: 1000, inStock: true },
  { id: 2, name: 'Phone', price: 500, inStock: false },
  { id: 3, name: 'Tablet', price: 700, inStock: true },
];

// console.log(
//   products.filter(product => product.price <= 700 && product.inStock)
// );

// 1. Calculating the Sum of Values in an Array of Objects
const orders = [
  { id: 1, amount: 250 },
  { id: 2, amount: 400 },
  { id: 3, amount: 100 },
];

// console.log(orders.reduce((accum, order) => accum + order.amount, 0));

// 2. Grouping Objects by a Property
const people = [
  { name: 'Alice', age: 21, group: 'A' },
  { name: 'Bob', age: 22, group: 'B' },
  { name: 'Charlie', age: 23, group: 'A' },
  { name: 'David', age: 22, group: 'B' },
  { name: 'Edward', age: 21, group: 'A' },
];
// console.log(
//   people.reduce((groupedPeople, person) => {
//     if (person.group === 'A') return groupedPeople.concat(person);
//     else return groupedPeople;
//   }, [])
// );

// 3. Counting Occurrences of Values in an Array
const fruits = [
  'apple',
  'banana',
  'orange',
  'apple',
  'orange',
  'banana',
  'banana',
];

// console.log(
//   fruits.reduce((fruitsCount, fruit) => {
//     fruitsCount[fruit] ? (fruitsCount[fruit] += 1) : (fruitsCount[fruit] = 1);
//     return fruitsCount;
//   }, {})
// );

// 4.  Implementing a map Function Using reduce()

// console.log(
//   numbers.reduce((mappedNumbers, number) => {
//     mappedNumbers.push(number * 2);
//     return mappedNumbers;
//   }, [])
// );

// 5. Implementing a filter Function Using reduce()
const numbers = [1, 2, 3, 4, 5];

console.log(
  numbers.reduce((filteredNumbers, num) => {
    if (num % 2 === 0) filteredNumbers.push(num);
    return filteredNumbers;
  }, [])
);


// 6. Removing Duplicates from an Array
const numbers = [1, 2, 2, 3, 4, 4, 5];

console.log(
  numbers.reduce((unique, num) => {
    if (!unique.includes(num)) unique.push(num);
    return unique;
  }, [])
);

// 7. Transforming an Array into an Object
const keyValuePairs = [
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
];
console.log(
  keyValuePairs.reduce((obj, arr) => {
    const [x, y] = arr;
    obj[x] = y;
    return obj;
  }, {})
);
// 8. Calculating the Average of Values in an Array
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.reduce((avg, num) => avg + num / numbers.length, 0));
*/

// array methods

/*
 * find()
 * findIndex()
 * some()
 * every()
 * flat()
 * sort()
 * toSorted()
 */

// find()
/*
// 1. Find a specific user
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const userToFind = 2;
console.log(users.find(user => user.name === userToFind));


// 2. Finding a product by name
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 499 },
  { name: 'Tablet', price: 299 },
];

const productNameToFind = 'Laptop';

console.log(products.find(product => product.name === productNameToFind));

// 3. Finding the first even number
const numbers = [1, 3, 7, 8, 10, 12];
console.log(
  `The first even number is : ${numbers.find(number => number % 2 === 0)}`
);

// 4. Finding an Available Appointment Slot
const appointments = [
  { time: '09:00', available: false },
  { time: '10:00', available: false },
  { time: '11:00', available: true },
  { time: '12:00', available: true },
];
console.log(appointments.find(app => app.available));

const books = [
  { title: 'Book A', isbn: '123-456' },
  { title: 'Book B', isbn: '789-101' },
  { title: 'Book C', isbn: '112-131' },
];
const isbnToFind = '123-456';
console.log(books.find(book => book.isbn === isbnToFind));

// 5. Finding a City with a Specific Population Range
const cities = [
  { name: 'City A', population: 100_000 },
  { name: 'City B', population: 500_000 },
  { name: 'City C', population: 1_000_000 },
];

const minPopulation = 100_000;
const maxPopulaiton = 500_000;

console.log(
  cities.find(
    city => city.population > minPopulation && city.population <= maxPopulaiton
  )
);

// findIndex()
// 1. Find the index of the first prime number
const numbers = [4, 6, 8, 9, 10, 13, 15, 17];

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(numbers.findIndex(num => isPrime(num)));

// 2: Finding the Index of the First User with Multiple Roles
const users = [
  { id: 1, name: 'Alice', roles: ['user'] },
  { id: 2, name: 'Bob', roles: ['user', 'admin'] },
  { id: 3, name: 'Charlie', roles: ['user', 'editor', 'admin'] },
];

console.log(users.findIndex(user => user.roles.length > 1));

// 3. Finding the Index of the First Palindrome String
const strings = ['hello', 'world', 'level', 'javascript', 'radar'];

console.log(
  strings.findIndex(string => string === string.split('').toReversed().join(''))
);

// some()

// 1. Checking for Prime Numbers
function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const numbers = [4, 6, 8, 9, 11, 15, 20];
const hasPrime = numbers.some(num => isPrime(num));
console.log(hasPrime);

// 2. Checking for Tasks with a Specific Status

const tasks = [
  { id: 1, description: 'Task 1', status: 'completed' },
  { id: 2, description: 'Task 2', status: 'in progress' },
  { id: 3, description: 'Task 3', status: 'not started' },
  { id: 4, description: 'Task 4', status: 'completed' },
];
const status = 'in progress';
const hastTaskWithStatus = tasks.some(task => task.status === status);
console.log(hastTaskWithStatus);

// every()

// 1. Checking if All Students Have Passed

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 88 },
];

const allHasPassed = students.every(std => std.grade > 33);
console.log(allHasPassed);

// 2. Checking if All Events are on Weekends
const events = [
  { name: 'Event 1', date: '2024-07-13' }, // Saturday
  { name: 'Event 2', date: '2024-07-14' }, // Sunday
  { name: 'Event 3', date: '2024-07-20' }, // Saturday
];

const onWeekends = events.every(
  event =>
    new Date(event.date).getDay() == 0 || new Date(event.date).getDay() == 6
);
console.log(onWeekends);

// flat()
// 1. Flatten and Group by Type
const mixedTypeArray = [1, ['a', [true, [2, 'b', false, [3, 'c']]]]];
const flattenedArray = mixedTypeArray.flat(Infinity);
const groupedArray = flattenedArray.reduce((groupedObj, el) => {
  const type = typeof el;
  groupedObj[type] = groupedObj[type] || [];
  groupedObj[type].push(el);
  return groupedObj;
}, {});

console.log(groupedArray);
// 2. Flatten an Array of Dates and Find the Latest Date
const nestedDates = [
  ['2020-01-01', '2021-05-15'],
  [['2022-03-30', ['2023-07-18']]],
  ['2019-12-31'],
];
const flattenDates = nestedDates.flat(Infinity);
const latestDate = flattenDates
.sort((a, b) => new Date(a) - new Date(b))
.at(-1);
console.log(latestDate);
*/

// 3. flattening an array without using the flat() method

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
/*
const flat = function (arr, n) {
  if (n === 0) return arr;
  const flattenedArray = [];

  arr.forEach(el => {
    if (Array.isArray(el)) flattenedArray.push(...flat(el, n - 1));
    else flattenedArray.push(el);
  });
  return flattenedArray;
};
console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
);

// 4.  Flatten an Array and Remove Duplicates

const nestedArrayWithDuplicates = [1, [2, [3, [4, [5, 2, 3, 1]]]]];

const flattenedArray = nestedArrayWithDuplicates.flat(Infinity);
const uniqueFlattenedArray = [...new Set(flattenedArray)];
console.log(uniqueFlattenedArray);

// More ways of creating and filling arrays

const arr = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arr);

// 1. Parsing Integer from a String
const str = '123';
const parsedInt = Number.parseInt(str, 10);
console.log(parsedInt);

// 2.  Parsing with Different Radix (Base)
const binaryStr = '1010';
const octalStr = '755';
const hexStr = '1A';
const binaryInt = Number.parseInt(binaryStr, 2);
const octalInt = Number.parseInt(octalStr, 8);
const hexInt = Number.parseInt(hexStr, 16);
console.log(binaryInt, octalInt, hexInt);

// Number.parseFloat()
// 1. Parsing float point number from a string
const str = '123.45';
const parsedFloat = Number.parseFloat(str);
console.log(parsedFloat);

// 2.  Parsing with Different Radix (Base)
const binaryStr = '1010.1001';
const octalStr = '755.565';
const hexStr = '1A.EF';

const binaryFloat = Number.parseFloat(binaryStr, 2);
const octalFloat = Number.parseFloat(octalStr, 8);
const hexFloat = Number.parseFloat(hexStr, 16);
console.log(binaryFloat, octalFloat, hexFloat);

// InterNationalization
const currentDate = new Date();
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: 'numeric',
  second: 'numeric',
};
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
  currentDate
);
console.log(formattedDate);

const number = 1_286_742_750_677_284.571428571428571;
const formattedNumber = new Intl.NumberFormat('en-UK', {
  style: 'currency',
  currency: 'EUR',
}).format(number);
console.log(formattedNumber);

// 3. Handling invalid parsing

const invalidStr = 'abc';
const parsedNumber = Number.parseInt(invalidStr); // returns NaN -> not a number
console.log(parsedNumber);

// 4. Using Number.parseInt() with Array Mapping
const numStrArray = ['10', '20', '30'];
const numIntArray = numStrArray.map(str => Number.parseInt(str));
console.log(numIntArray);

// 5. Parsing with Different Radix (Base) from User Input
const prompt = require('prompt-sync')();
const userInput = prompt('Enter numbers of different bases: ');
let radix = 10; // default base is Decimal
if (userInput.startsWith('0b')) radix = 2;
else if (userInput.startsWith('0o')) radix = 8;
else if (userInput.startsWith('0x')) radix = 16;
const parsedNumber = Number.parseInt(userInput.slice(2), radix);
console.log(parsedNumber);

// 2. Exponential Notation
const expStr = '1.23e4'; // Equivalent to 12300
const parsedFloat = Number.parseFloat(expStr);
console.log(parsedFloat);

const complexCalculation = (a, b) => {
  const result = Math.log(a) / b;
  return Number.isFinite(result) ? result : 'Invalid calculation';
};

console.log(complexCalculation(10, 0)); // 'Invalid calculation' (log(10)/0 -> NaN)
console.log(complexCalculation(10, 2)); // 1.151292546497023 (log(10)/2)

console.log(Math.sqrt(-1));

// 1. Generate first n prime numbers

const generatePrimeNumbers = function (n) {
  const numbers = new Array(n).fill(true);
  
  for (let i = 2; i * i <= n; i++) {
    if (numbers[i] == true) {
      for (let j = i * i; j <= n; j++) {
        if (j % i === 0) numbers[j] = false;
      }
    }
  }
  const primes = [];
  numbers.forEach((num, i) => {
    if (num) primes.push(i);
  });
  return primes.slice(2);
};

console.log(generatePrimeNumbers(1200));


// Math.random()
const createRandomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
};
console.log(createRandomNumber(10, 20));

// Math.max(_)
console.log(Math.max(...numbers)); // 50

// Math.min(_)
const numbers = [10, 20, 30, 40, 50];
console.log(Math.min(...numbers)); // 10


// base 2 logarithm
console.log(Math.log2(5));


// sign of a number
console.log(Math.sign(5)); // 1
// trigonometric methods
console.log(Math.tan(Math.PI / 2)); // 16331239353195370

// Rounding Decimals

console.log(+(0.012539765).toFixed(3)); // 0.013

// Workings of BigInt

console.log(BigInt('0b10101010')); // 170n
console.log(BigInt(1000054675) % 23n); // 1n

// 5 ways of creating a date
// 1
const date1 = new Date(); // consturctor function

// 2
const date2 = new Date('2020-05-12T23:50:21.817Z'); // ISO string

// 3
const date3 = new Date(1000000000000); // Timestamp

// 4
const date4 = new Date(2015, 11, 31, 12, 35, 55); // numeric values

// 5
const date5 = new Date('15 october, 2015'); // string

console.log('date 1: ' + date1);
console.log('date 2: ' + date2);
console.log('date 3: ' + date3);
console.log('date 4: ' + date4);
console.log('date 5: ' + date5);

// ISO string
console.log('ISO string : ' + date3.toISOString());
const date = new Date();
console.log(date.toISOString());
console.log(date.toUTCString());

// Date.prototype.getUTCFullYear(_)
console.log(date.getUTCFullYear());

// Date.prototype.getUTCMonth(_)
console.log(date.getUTCMonth());

// Date.prototype.getUTCDate(_)
console.log(date.getUTCDate());

// Date.prototype.getUTCHours(_)
console.log(date.getUTCHours());

// Date.prototype.getUTCMinutes(_)
console.log(date.getUTCMinutes());

// Date.prototype.getUTCSeconds(_)
console.log(date.getUTCSeconds());

// Date.prototype.getUTCMilliseconds(_)
console.log(date.getUTCMilliseconds());

const date = new Date();
// Date.prototype.setFullYear(_)
console.log(date.setFullYear(2025));

// Date.prototype.setMonth(_)
console.log(date.setMonth(10));

// Date.prototype.setDate(_)
console.log(date.setDate(15));

// Date.prototype.setHours(_)
console.log(date.setHours(2));

// Date.prototype.setMinutes(_)
console.log(date.setMinutes(41));

// Date.prototype.setSeconds(_)
console.log(date.setSeconds(59));

// Date.prototype.setMilliseconds(_)
console.log(date.setMilliseconds(999));

console.log(date); // Sat Nov 15 2025 02:41:59 GMT+0600 (Bangladesh Standard Time)

console.log(Date.now());
console.log(date.getTime());


// Format Date & Time
const date = new Date();
const options = {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  console.log(formattedDate); // July 28, 2024 at 08:27:55 AM
  
  // Internationalization API
  
  // Format Number
  const number = 1359748523695.1245795;
  const options = {
    style: 'currency',
    currency: 'USD',
  };
  const formattedNumber = new Intl.NumberFormat('pt-PT', options).format(number);
  console.log(formattedNumber); // 1 359 748 523 695,12 US$
  */

// setTimeout()
const showMsgEl = document.querySelector('#showMessage');
const cancelMsgEl = document.querySelector('#cancelMessage');
let timeoutId;

const setMessage = function (message) {
  alert(message);
  // console.log(this);
};
const showMessage = function () {
  timeoutId = setTimeout(
    setMessage,
    2 * 1000,
    'A message from JavaScript..🤩🤩'
  );
};

//cancel the message before it shows
const cancelMessage = function () {
  clearTimeout(timeoutId);
};

showMsgEl.addEventListener('click', showMessage);
cancelMsgEl.addEventListener('click', cancelMessage);

// creating a timer with setInterval()
const timerEl = document.querySelector('.time');
const playTimerBtn = document.querySelector('#playTimer');
const pauseTimerBtn = document.querySelector('#pauseTimer');
const resetTimerBtn = document.querySelector('#resetTimer');
let intervalId;

// set the timer
let minutes = 5;
let seconds = 0;

//play the timer
const playTimer = function () {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function () {
    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }
    seconds--;
    timerEl.textContent = `${minutes.toString().padStart(2, 0)}: ${seconds
      .toString()
      .padStart(2, 0)}`;
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      playTimerBtn.classList.add('hide');
      pauseTimerBtn.classList.add('hide');
    }
  }, 1000);
  playTimerBtn.classList.add('hide');
  pauseTimerBtn.classList.remove('hide');
  console.log('play');
};

// pause the timer
const pauseTimer = function () {
  clearInterval(intervalId);
  pauseTimerBtn.classList.add('hide');
  playTimerBtn.classList.remove('hide');
  console.log('pause');
};

// reset timer
const resetTimer = function () {
  clearInterval(intervalId);
  timerEl.textContent = '05:00';
  minutes = 5;
  seconds = 0;
  // 1. reset when timer ends
  if (
    pauseTimerBtn.classList.contains('hide') &&
    playTimerBtn.classList.contains('hide')
  ) {
    playTimerBtn.classList.remove('hide');
  }
  // 2. reset while timer's paused

  // 3. reset while timer's playing
  else if (playTimerBtn.classList.contains('hide')) {
    playTimer();
  }
};

playTimerBtn.addEventListener('click', playTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
resetTimerBtn.addEventListener('click', resetTimer);

//creating a new element
const cookieMessage = document.createElement('div');
const createCookieMessage = function () {
  cookieMessage.classList.add('cookie-message');
  // document.documentElement.style.setProperty('--color-primary', 'orangered');
  // document.documentElement.style.setProperty('--color-secondary', '#ff956b');
  cookieMessage.style.setProperty('background-color', 'var(--color-secondary)');
  cookieMessage.innerHTML =
    'Accept all cookies <button class="button cookie-btn">Accept</button>';

  document.body.append(cookieMessage);
  document.querySelector('.cookie-btn').addEventListener('click', function () {
    cookieMessage.remove();
  });
};

window.addEventListener('load', function () {
  setTimeout(createCookieMessage, 2000);
});

const timer = document.querySelector('.timer');
console.log(timer.style.marginBottom);
console.log(getComputedStyle(timer).width);

console.log(
  document.querySelector('.gallery-image').setAttribute('alt', 'skateboarding')
);

console.log(document.querySelector('.gallery-image').dataset.versionNo);

// smooth scrolling
// modern way
/*
const scrollFrom = document.querySelector('.btn--scrollFrom');
const scrollTo = document.querySelector('.gallery');

scrollFrom.addEventListener('click', function () {
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
*/

// Old school way
const scrollFrom = document.querySelector('.btn--scrollFrom');
const scrollTo = document.querySelector('.gallery');

scrollFrom.addEventListener('click', function () {
  window.scrollTo({
    left: 0,
    top: scrollTo.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth',
  });
});
