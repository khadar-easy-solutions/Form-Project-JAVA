let name = prompt("Enter Name");
let adder = prompt("Enter Address"); // Corrected typo: "Adress" to "Address"
let phone = parseInt(prompt("Phone Number"));
let bdh = parseInt(prompt("Birth Date")); // Corrected typo: "Bath Date" to "Birth Date"

// Improved age calculation to handle potential errors
let age;
if (!isNaN(bdh)) {
  age = 2024 - bdh;
} else {
  age = "Invalid Birth Date"; // Or handle the error in a different way
}


console.log(name);
console.log(adder);
console.log(phone);
console.log(age);


document.write("<h1> Name: " + name + "</h1>"); // Use lowercase 'name'
document.write("<h1> Address: " + adder + "</h1>"); // Corrected typo in the output
document.write("<h1> Phone: " + phone + "</h1>");
document.write("<h1> Age: " + age + "</h1>");      // Corrected typo in the output