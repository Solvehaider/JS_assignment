const show_magicians = (magicians_names) => {
  let temp = [];
  for (const i in magicians_names) {
    // converting to an arraY
    temp = Array.from(magicians_names[i]);
    console.log(temp);
  }
};
//   adding the great to each magicain name
const make_great = (magicians_names) => {
  for (const i in magicians_names) {
    magicians_names[i] = "The Great " + magicians_names[i];
  }
  return magicians_names;
};

let magicians_names = ["ali", "jaka", "devila"];
//    making copy of magicians_names
let temp_magicians = Array.from(magicians_names);

//   storing in seperate array
const great_magicians = make_great(temp_magicians);

console.log("Magicain Names in the Array :");
show_magicians(magicians_names);

console.log("\nModified Magicain Names in the Array :");
show_magicians(great_magicians);
