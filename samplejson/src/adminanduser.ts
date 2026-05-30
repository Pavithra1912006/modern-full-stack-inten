enum role{
    admin="ADMIN",
    user="USER"
}

interface user{
    id:number,
    name:string,
    role:string,
    email:string,
    isValid:boolean
}
const user1:user={
    id:1,
    name:"pavi",
    role:role.user,
    email:"pavi@gmail.com",
    isValid:true
}
const user2:user={
    id:2,
    name:"priya",
    role:role.user,
    email:"priya@gmail.com",
    isValid:true
}
const user3:user={
    id:3,
    name:"admin",
    role:role.admin,
    email:"admin@gmail.com",
    isValid:true
}
function login (u:user):void{
   
console.log(`${u.name}logged in successfully `);

 if(u.role==="ADMIN")
console.log("admin is allowed");
 else
     console.log("user only");

}
login(user1);
login(user3);