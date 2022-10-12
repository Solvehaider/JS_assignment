const prompt = require("prompt-sync")();
let person_Age = Number.parseInt(prompt("Enter YOur Age : "));
console.log(person_Age);
if (person_Age === 0) {
  console.log("We need to find new user");
} else if (person_Age < 2) {
  console.log("Baby");
} else if (person_Age >= 2 && person_Age < 4) {
  console.log("Toddler");
} else if (person_Age >= 4 && person_Age < 13) {
  console.log("Kid");
} else if (person_Age >= 13 && person_Age < 20) {
  console.log("Teenager");
} else if (person_Age >= 20 && person_Age < 65) {
  console.log("Adult");
} else if (person_Age >= 65) {
  console.log("ELder");
} else {
  console.log("Not a Valid Age");
}
