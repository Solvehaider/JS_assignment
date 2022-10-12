const show_magicians = (magicians_names) => {
  let temp = [];
  for (const i in magicians_names) {
    // converting to an arraY
      temp = Array.from(magicians_names[i]);
      console.log(temp);  
  }
  
};
let magicians_names = ["ali", "jaka", "devila"];
console.log('Magicain Names in the Array :');

show_magicians( magicians_names);