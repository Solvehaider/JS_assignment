const prompt = require("prompt-sync")();

// using "rest parameters syntax" here
const sandwitch_desire = (persons, ...items) => {
  return console.log(
    `${persons} Sandwhich have following items in it ${items.toString()}`
  );
};

// making array of persons
const person = ["liaqat", "abu", "zubair", "salman"];
console.log(person);

// Three different calls with different arguments
sandwitch_desire(person[0], "salad", "chicken", "sauce");
console.log('\n');
sandwitch_desire(person[1], "salad", "vegetables", "sauce", "mint");
console.log('\n');

sandwitch_desire(person[2], "fish", "prawns");

