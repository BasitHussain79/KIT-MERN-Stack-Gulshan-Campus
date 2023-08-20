// Regular Function
// function initialize

function name2() {
  return "Hello";
}

function name1() {
  return name2;
}

function funcString() {
  return name1;
}

// function invoke/ call
// const functionCall = funcString()()();
// console.log(functionCall);

// Function Expresion
// const func = function () {
//   return 2 + 2;
// };

// let a = func();
// console.log(a);

// Arrow Function
// const arrowFunc = () => funcString;

// let arrowFuncVal = arrowFunc()()()();
// console.log(arrowFuncVal);

// function regularSum(a, b) {
//   return a + b;
// }

// const expSum = function (a, b) {
//   return a + b;
// };
// const arrowSum = (a, b) => a + b;

// const value = arrowSum(2, 2);

function calculateProductTax(produts, tax) {
  let total = 0;
  let totalProductSum = 0;
  for (let i = 0; i < produts.length; i++) {
    total += produts[i] + produts[i] * tax;
    totalProductSum += produts[i];
  }
  return {
    productPriceWithTax: total,
    productPriceWithoutTax: totalProductSum,
  };
}

const calTax = calculateProductTax([20, 30, 10, 20], 0.2);
console.log(calTax);
