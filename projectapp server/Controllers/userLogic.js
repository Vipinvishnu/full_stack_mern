const users = require("../Model/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { userName, email, password } = req.body;
  // console.log(userName);
  //   console.log(email);
  //   console.log(password);

  //   res.status(200).json("register worked");

  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      res.status(400).json("already exist");
    } else {
      const newUser = new users({
        userName,
        email,
        password,
        github: "",
        linkedIn: "",
        profile: "",
      });
      //store the new object in mongodb collection
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`register Api failed ${err}`);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await users.findOne({ email, password });
    if (existUser) {
      //login success-token generate
      const token = jwt.sign({ _id: existUser._id }, "supersecretkey123");
      console.log(token);

      res.status(200).json({
        user: existUser,
        token,
      });
    } else {
      res.status(404).json("incorrect email or password ");
    }
  } catch (err) {
    res.status(401).json(`login api failed ${err}`);
  }
};

exports.editprofile = async (req, res) => {
  const { userName, github, linkedIn } = req.body;
  const { _id } = req.params;
  const profile = req.file.filename;

  //   console.log(userName);
  //   console.log(_id);
  //   console.log(profile);

  try {
    const selectedUser = await users.findOne({ _id });
    if (selectedUser) {
      selectedUser.userName = userName;
      selectedUser.github = github;
      selectedUser.linkedIn = linkedIn;
      selectedUser.profile = profile;

      //save changes in mongodb
      await selectedUser.save();
      res.status(200).json(` ${userName} profile updated`);
    } else {
      res.status(400).json(` ${userName} is not present`);
    }
  } catch (err) {
    res.status(401).json(`Login Api Failed ${err}`);
  }
};

exports.getprofile=async(req,res)=>{
  const {_id}=req.params
  try {
    const UserData=await users.findOne({_id})
    if(UserData){
res.status(200).json(UserData)
    }
    else
    {
res.status(404).json("user not found")
    }
  } catch (error) {
    res.status(401).json(`get Profile  Api Failed${error}`)
  }
}

