const express=require('express')


//router object

const router=new express.Router()
const userLogic=require('../Controllers/userLogic')

//signup 
router.post('/user/register',userLogic.register)
//login
router.post('/user/login',userLogic.login)
//update profile
router.put('/user/update-profile/:_id')

module.exports=router