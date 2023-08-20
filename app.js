// Primitive
// 1. String ""
// 2. Number
// 3. Boolean false
// 4. null
// 5. undefined
// Non-Primitive / Composite
// object
// array
// new Date()
// functions
// new Set

console.log(this);

const obj = {
  firstName: "Basit",
  lastName: "Hussain",
  blogs: [
    {
      name: "Abc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, inventore.",
      likes: 10,
    },
    {
      name: "Xyz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, inventore.",
      likes: 20,
      author: "Khizer",
    },
    {
      name: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, inventore.",
      likes: 30,
    },
  ],
  address: null,
  login() {
    console.log("Login");
    console.log("login", this);
  },
  printBlogs() {},
  logout: function () {
    console.log("Logout");
    console.log("logout", this);
  },
};

// obj.login();
// console.log(`${obj.firstName} ${obj.lastName}`);
// obj.logout();

// ternary operator
// condition ? statement : statement

// const address = obj.address ? obj.address : "Gulshan near Children Hospital";
// const address = !obj.address && "Gulshan near Children Hospital";
// const address = obj?.address ?? "Gulshan near Children Hospital";
// const fullName = `${obj.firstName} ${obj.lastName}`;
// console.log(fullName, address, obj);

// "" 0 null undefined -> false values
// if (!obj.address) {
//   obj.address = "Abc, xyz, 123";
// }

// Math Object
console.log(Math.PI);

let num = 2.9;
console.log(Math.round(num));
console.log(Math.round(Math.random() * 100));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.trunc(num));
