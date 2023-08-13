// let i = 2;
// for (; i >= 0; ) {
//   console.log(i);
//   i--;
// }

// let i = 0;
// while (i <= 2) {
//   console.log(i);
//   i++;
// }

// let i = 4;

// do {
//   console.log(i);
//   i++;
// } while (i <= 1);

// const a = 20;

// if (a) {
//   console.log("statement");
// } else if (!a) {
//   console.log("else if");
// }

// let x = "B";

// switch (x) {
//   case "A":
//     console.log("A");
//     break;
//   case "B":
//     console.log("B");
//   // break;
//   case "C":
//     console.log("C");
//   // break;
//   default:
//     console.log("Invalid case");
// }

// let arr = [0, 1, 2];

// for (let x of arr) {
//   console.log(x);
// }

const obj = {
  firstName: "Basit",
  lastName: "Hussain",
  courses: ["MERN", "AI", "Xyz"],
  address: null,
};

obj.email = "basit@email.com";
obj.courses[2] = "Blockchaing";
obj["address"] = "Xyz";

// console.log(`${obj["firstName"]} ${obj["lastName"]}`, obj["courses"][2]);

let keys = Object.keys(obj);
let values = Object.values(obj);
let objectArr = Object.entries(obj);
console.log(keys, values, objectArr);

for (let y in obj) {
  console.log(y, typeof y);
}
