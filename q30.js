let greeting = ["ALI", "admin", "obaid", "karan", "bilal"];
console.log(`Users : ${greeting}`);

// 
for (const username of greeting) {
    // if username admin printing special msg
    if (username==="admin") {
        console.log('Hello admin, would you like to see a status report?');
    }else{
        // otherwise normal msg
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
    // console.log(iterator);
}
