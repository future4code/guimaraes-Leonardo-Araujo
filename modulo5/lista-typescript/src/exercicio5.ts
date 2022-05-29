const users= [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 
enum Role{
    USER="user",
    ADMIN="admin"
}
type User={
    name:string,
    email:string,
    role:Role

}
const usersAdmin=(users:Array<object>):Array<object>=>{
    const usersAdmin=users.filter((user:User):boolean=>{
        return user.role==="admin"
    })
    return usersAdmin

}

console.log(usersAdmin(users))