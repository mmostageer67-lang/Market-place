const validateRegister=(data)=>
{   const {email,password,name}=data
if(!email||!password||!name)
{
    throw new Error("all fields required!");
    
}
const emailRegex=/^\S+@\S+\.\S+$/
if(!emailRegex.test(email))
{
    throw new Error("invalide email format");
}
if(password.length<6)
{
    throw new Error("the password lenght at least be 6 ");
}}
const validateLogin=(data)=>
{
    
}
module.exports=validateRegister