const express = require("express");

//router object

const router = new express.Router();
const userLogic = require("../Controllers/userLogic");
const upload = require("../middlewares/multerMiddleware");

//signup
router.post("/user/register", userLogic.register);
//login
router.post("/user/login", userLogic.login);
//update profile
router.put("/user/update-profile/:_id",upload.single("profile"),userLogic.editprofile);

module.exports = router;
