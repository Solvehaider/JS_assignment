function titleCase(str) {
  // converting string to lowercase then split it
  str = str.toLowerCase().split(" ");
  // for loop make it titlecase
  for (var i = 0; i < str.length; i++) {
    //take one string make its first letter capital
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  //return  new string by concatenating all of the elements
  //  in an array sperated by  space " "
  return str.join(" ");
}
const prompt = require("prompt-sync")();
// storing nama of the person
let name = prompt(" Enter Name ");

// printing the in lowercase, uppercase, titlecase

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(titleCase(name));
