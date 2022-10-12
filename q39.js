const prompt = require("prompt-sync")();
const city_country = (city, country) => {
  var str = `"${city},${country}"`;
  return str;
};

let city = prompt("Enter City Name: ");
let country = prompt("Enter Country Name: ");

// making first letter Capital and others small letters
city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

console.log(city_country(city, country));
