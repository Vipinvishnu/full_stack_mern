const { response } = require('express');
const jwt = require('jsonwebtoken')

exports.jwtmiddleware=(req,res,next)=>{
    console.log("inside middleware");
    
    // token access
   const token= req.headers['access_token'].split(" ")[1]

    //verify
    try {
        const Jwtresponse=jwt.verify(token,'supersecretkey123')
        // console.log(Jwtresponse);
        req.payload= Jwtresponse._id
        next()
    } catch (error) {
        res.status(401).json("autharization Failed")
    }
}