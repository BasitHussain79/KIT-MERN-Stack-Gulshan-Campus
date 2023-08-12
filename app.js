// let num1 = 2;
// let num2 = 3;

// Airthamatinc Operators
// console.log("add", num1 + num2);
// console.log("sub", num1 - num2);
// console.log("mul", num1 * num2);
// console.log("div", num1 / num2);
// console.log("power", num1 ** 2);
// console.log("Modulus", num2 % num1);

// Increment or Decrement
// console.log(num1++); // post increment = 2 + 1 = 2
// console.log(++num1); // pre increment = 1 + 3 = 4
// console.log(num1--); // post decrement = 4 - 1 = 4
// console.log(--num1); // post decrement = -1 + 3 = -2

// Assignment Operators
// num2 += 4; // 3 + 4 = 7
// num2 -= 4; // 3 - 4 = -1
// num2 *= 4; // 3 * 4 = 12
// num2 /= 5; // 3 * 5 = 2.4

// console.log(2 - "23");

// Arrays --> To store multiple values in a single varaible
// 0 -> 1
// 1 -> 2
// 2 -> 3
// 3 -> 4
// 4 -> 5

const arr = [1, true, "Hello", null]; // --> 110101010

// arr[5] = "World!";
// arr.push("abc", 123, true);
// arr.push(null);

// arr.pop();
// arr.pop();

// arr.unshift(123);
// arr.shift();

const arr2 = [1, 2, 3, 4];

// console.log(arr.join(" - "));
const arr3 = arr.concat(arr2, [true, false, true]);
arr3.indexOf("Hello");
const arr4 = arr3.slice(1, 4);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Abc", "Abc2");
console.log(fruits);
