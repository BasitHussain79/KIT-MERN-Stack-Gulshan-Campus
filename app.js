const firstName = "Basit";
const lastName = "Hussain";
const name = "Hello World!";
const fullName = firstName + " " + lastName;
const fullNameWithTemplateString = `
<h1>Hello World</h1>
<p>lorem 101232.3</p>
${fullName}
<button>Click Me</button>
`;

const firstNameWithUpperCase = firstName.toUpperCase();
const firstNameWithLowerCase = firstName.toLowerCase();
console.log(lastName.indexOf("s"));
console.log(lastName.lastIndexOf("y"));
// slice vs splice vs substr
console.log(lastName.slice(2));
console.log(lastName.substring(2, 4));
console.log(name.replaceAll("l", "a"));
