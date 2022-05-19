const bcrypt=require("bcrypt");
const router=require("express").Router();
const User=require("../models/User.js");
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
//USER REGISTRATION

router.post("/registration",async (req,res)=>{
  try{
    const salt=await bcrypt.genSalt(12);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    let newuser=new User({
      username:req.body.username,
      email:req.body.email,
      password:hashedPassword
    });
    let userDetails = await newuser.save();
    res.status(200).json(userDetails);
  }catch(err){
    console.log(err);
  }
});

//USER LOGIN

router.post("/login",async (req, res) => {
  try{
    const user=await User.findOne({email:req.body.email});
    !user && res.status(404).json("User does not exist");
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    !validPassword && res.status(404).json("Please enter a valid password!!");
    res.status(200).json(user);

  }catch(err){
    console.log(err);
  }
});
module.exports=router;
