// Exercise 39 copy here
// const prompt = require("prompt-sync")();
// const city_country = (city, country) => {
//   var str = `"${city},${country}"`;
//   return str;
// };

// let city = prompt("Enter City Name: ");
// let country = prompt("Enter Country Name: ");

// // making first letter Capital and others small letters
// city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
// country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

// console.log(city_country(city, country));

// /------------------------------------------------------
const show_magicians = (magicians_names) => {
  let temp = [];
  for (const i in magicians_names) {
    // converting to an arraY
    temp = Array.from(magicians_names[i]);
    console.log(temp);
  }
};
const make_great = (magicians_names) => {
  for (const i in magicians_names) {
    magicians_names[i] = "The Great " + magicians_names[i];
  }
  return magicians_names;
};

let magicians_names = ["ali", "jaka", "devila"];
const great_magicians = make_great(magicians_names);
console.log("Magicain Names in the Array :");
show_magicians(great_magicians);
