let user = {
    id: 1,
    name: "vasya",
}

user.age = 34;
console.log(user);

// add new characteristic
// user.status = true;
user["status"] = false;

// delete characteristic
delete user.id;
console.log(user);

// delete characteristic
delete user.age;
console.log(user);

