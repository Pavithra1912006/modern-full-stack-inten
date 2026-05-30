"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role;
(function (role) {
    role["admin"] = "ADMIN";
    role["user"] = "USER";
})(role || (role = {}));
const user1 = {
    id: 1,
    name: "pavi",
    role: role.user,
    email: "pavi@gmail.com",
    isValid: true
};
const user2 = {
    id: 2,
    name: "priya",
    role: role.user,
    email: "priya@gmail.com",
    isValid: true
};
const user3 = {
    id: 3,
    name: "admin",
    role: role.admin,
    email: "admin@gmail.com",
    isValid: true
};
function login(u) {
    console.log(`${u.name}logged in successfully `);
    if (u.role === "ADMIN")
        console.log("admin is allowed");
    else
        console.log("user only");
}
login(user1);
login(user3);
