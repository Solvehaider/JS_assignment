// function to display invitations
const invitation = (listt) =>{
    for (const key of listt ) {
        console.log(`Hey ${key} you are invited to dinner tonight at my place .`);
    }
}

// storing the invited guests 
let guest_List = ["Ali","Abdullah","Usman","Sidhu"]
// displaying invitation to each person
invitation(guest_List)


console.log("\nAli cannot make it so i'm inviting Ahmed ")
// adding new person 
guest_List[0]='Ahmed';
// displaying invitation to new guest list
invitation(guest_List)


