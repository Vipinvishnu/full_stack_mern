const express = require("express");

//router object

const router = new express.Router();
const userLogic = require("../Controllers/userLogic");
const upload = require("../middlewares/multerMiddleware");
const { jwtmiddleware } = require("../middlewares/jwtmiddleware");

//signup
router.post("/user/register", userLogic.register);

//login
router.post("/user/login", userLogic.login);

//update profile
router.put("/user/update-profile/:_id", jwtmiddleware, upload.single("profile"), userLogic.editprofile);

// //get profile
// router.get("/user/getprofile/:_id", userLogic.getprofile);

module.exports = router;
