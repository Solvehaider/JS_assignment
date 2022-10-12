let current_users = ["ali", "usman", "Osama", "ashar", "aftab"];
console.log(`Current Users :  ${current_users}`);


// creating new user list and having 2 names same
let new_users = ["ALI", "khan", "osama", "abdul", "cheema"];
console.log(`New Users :  ${new_users}`);



// --------------------------
for (const newuser of new_users) {
    // case sensitive check return true if found a match
    const includesValue = current_users.some(element => {
        return element.toLowerCase() === newuser.toLowerCase();
    });
    
    if (includesValue==true) {
        console.log(
            `Useranme ${newuser} already in use the person will need to enter a new username`
            );
        } else {
            console.log(`Username ${newuser} is Available`);
        }
        
    }
    
    // const aliss=current_users.some(element =>{
    //     return  
    // });
    // for (const newuser of new_users) {
    //   // console.log(new_users);
    //   if (current_users.includes(newuser)) {
    //     console.log(
    //       `Useranme ${newuser} already in use the person will need to enter a new username`
    //     );
    //   } else {
    //     console.log(`Username ${newuser} is Available`);
    //   }
    // }


