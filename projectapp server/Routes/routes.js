const express=require('express')


//router object

const router=new express.Router()
const userLogic=require('../Controllers/userLogic')


//signup 
router.post('/user/register',userLogic.register)
//login


module.exports=router