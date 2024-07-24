const express=require('express')


//router object

const router=new express.Router()
const userLogic=require('../Controllers/userLogic')


//signup 
router.post('/user/register',userLogic.register)
//login
router.post('/user/login',userLogic.login)

module.exports=router