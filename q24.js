// 1
let frst = "abc";
let sccnd = "abc";

// equlity
console.log(frst === sccnd);
// inequality
console.log(frst !== sccnd);

// 2

let lower = "HABA";

console.log(lower.toLowerCase() === "haba");
console.log(lower.toLowerCase() === "ahdh");

// 3
let a = 5;
console.log(a !== 5);

let b = 9;
console.log(b < a);

let chk = "hudb";
console.log(b >= chk);
console.log(b <= chk);
console.log(a > b);

let fst = "ahmed";
let scnd = "ahmed";
console.log(fst == scnd);

console.log(b > a);

// 4

let x = 5;
let y = 7;

if (x > 5 && y < 7) {
  console.log(true);
} else {
  console.log(false);
}

if (x == 5 || y < 7) {
  console.log(true);
} else {
  console.log(false);
}

// 5
console.log("\nArray test");
let arr = [1, 2, 3, "f", "op"];
// testing present in array
console.log(arr.includes(3));
// testing not present in array
console.log(arr.includes("hdfu"));
