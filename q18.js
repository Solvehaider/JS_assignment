let location_List = ["Japan", "Korea", "USA", "Russia", "Saudia"];
// displaying array

console.log(`Original Unsorted List : ${location_List}`);
// console.log(location_List)

let temp_List = [];
// /cloing the array
temp_List = Array.from(location_List);

// displaying list after sorting
temp_List = temp_List.sort();
console.log(`Sorted List : ${temp_List}`);
console.log('\n');

// showing in original form
console.log(`List still in original form : ${location_List}`);
console.log('\n');

// resversing the list
temp_List = temp_List.reverse();
console.log(`List in reverse form : ${temp_List}`);
console.log('\n');

// showing in original form
console.log(`List still in original form : ${location_List}`);
console.log('\n');

// resversing the list  and order has changed
console.log(`List in reverse with changed order : ${location_List.reverse()}`);
console.log('\n');

// resversing back the list to show its still in original form
console.log(`List in reverse with changed order : ${location_List.reverse()}`);
console.log('\n');

// sorted list
console.log(`List in sorted order : ${location_List.sort()}`);

// displaying in reverse sorted order
console.log(`List sorted in reverse alphabatical order : ${location_List.reverse()}`);





