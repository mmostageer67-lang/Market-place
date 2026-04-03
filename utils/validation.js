const isValideEmail=(email)=>

{const emailRegex=/^\S+@\S+\.\S+$/
      return emailRegex.test(email)

}
const validateRegister=(data)=>
{   const {email,password,name}=data
if(!email||!password||!name)
{
    throw new Error("all fields required!");
    
}

if(!isValideEmail(email))
{
    throw new Error("invalide email format");
}
if(password.length<6)
{
    throw new Error("the password lenght at least be 6 ");
}}
const validateLogin=(data)=>
{
    const{email,password}=data
    if(!email||!password)
    {
        throw new Error("email&password are required!");
        
    }
if(!isValideEmail(email))
{
    throw new Error("invalid email format!!");
    
}
}
module.exports={validateRegister,validateLogin}