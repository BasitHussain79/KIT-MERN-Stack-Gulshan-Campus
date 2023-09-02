const headingByClass = document.querySelector(".heading");
const headingById = document.querySelector("#heading");
const allHeading = document.querySelectorAll(".heading");
const heading2 = document.querySelector("h2");

const getElementsByClassName = document.getElementsByClassName("heading");
const getElementById = document.getElementById("heading");
const getElementsByTagName = document.getElementsByTagName("h1");

const link = document.querySelector("a");

// link.setAttribute(
//   "href",
//   "https://github1s.com/BasitHussain79/Bano_Qabil_React_Complete_Guide/blob/dev-01/client/src/components/features/Auth/Register.js#L1-L157"
// );

// link.setAttribute("target", "_blank");

// link.setAttribute(
//   "style",
//   "color: red; font-size: 22px; text-decoration: none"
// );

// link.textContent = "GitHub Link";

// console.log(headingByClass.getAttribute("class"));

// headingByClass.innerHTML += " DOM Advance";

// console.log(getElementsByClassName);

// const arr = [1, 2, 3];

// allHeading.forEach((d) => {

// });

// for (let i = 0; i < getElementByClassName.length; i++) {
//   console.log(getElementByClassName[i]);
// }

// console.log(headingByClass.style);

headingByClass.style.fontSize = "20px";
headingByClass.style.color = "coral";
headingByClass.style.fontWeight = "700";

const parent = document.querySelector(".parent");
const child = document.querySelector(".parentChild");

console.log(parent.children);
console.log(parent.previousElementSibling);
console.log(parent.nextElementSibling);
console.log(
  child.previousElementSibling.nextElementSibling.parentElement.children
);
