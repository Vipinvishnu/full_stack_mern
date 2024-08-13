const jwt = require('jsonwebtoken')

export const jwtmiddleware=(req,res,next)=>{
    console.log("inside middleware");
    
    // token access
   const token= req.headers['access_token'].split(" ")[1]



    //verify
}