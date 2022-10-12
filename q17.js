// function to display invitations
const invitation = (listt) => {
  for (const key in listt) {
    console.log(
      `Hey ${listt[key]} you are invited to dinner to\ night at my place .`
    );
  }
};

// storing the invited guests
let guest_List = ["Ali", "Abdullah", "Usman", "Sidhu"];
// displaying invitation to each person
invitation(guest_List);

console.log("\nAli cannot make it so i'm inviting Ahmed ");
// adding new person
guest_List[0] = "Ahmed";
// displaying invitation to new guest list
invitation(guest_List);

console.log(
  "\nHey guys i found a bigger dinner table \
  So, I am inviting three more people\n"
);
// adding element to the start of array
guest_List.unshift("laila");

// adding element to the end of array
guest_List.push("ALiyan");

// adding element to the middle of array
const middle = Math.floor(guest_List.length / 2);
start_List = guest_List.slice(0, middle);
start_List[middle] = "Hamza,";

final_List = start_List + guest_List.slice(middle);
newlist = final_List.split(",");

// displaying new guest list
console.log("New Guest List : ", newlist.toString(), "\n");

// sending the invitation to each guest
console.log(invitation(newlist));

//   next start table not arrived
console.log(
  "Hey guys the new table is not arrived so i'm\
inviting only two guests\n"
);
// remoing the guests that are not invited
const len = newlist.length - 2;
for (let index = 0; index < len; index++) {
  console.log(`Hey ${newlist.pop()} you are not invited`);
}

console.log("\nThe New Guest List : ");

console.log(invitation(newlist));
