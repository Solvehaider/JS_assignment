const prompt = require("prompt-sync")();
// function creation
const make_shirt = (size, msg) => {
  console.log(
    `The Size of shirt is "${size}", and the message you wanna print is "${msg}"`
  );
};

const size = prompt("Enter Your shirt size: ");
const msg = prompt("Enter message u wanna print on shirt: ");

make_shirt(size, msg);
