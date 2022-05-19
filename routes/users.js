const bcrypt=require("bcrypt");
const router=require("express").Router();
const User=require("../models/User.js");
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

//UPDATE USER DETAILS
router.put("/:id",async (req,res) => {
  if(req.body.userId===req.params.id || req.body.isAdmin){
    if(req.body.password){//If User tried to reset his PASSWORD, then we must ENCRYPT it again
      try{
        const salt=await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);
      }catch(err){
        return res.status(500).json(err);
      }
    }
    try{
      const user=await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,     //$set is used to set all values of an object in one go
      });
      res.status(200).json("Your Account Details has been Updated!!");
    }catch(err){
      return res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("Don't try to update other user details");
  }
});
//Delete Account
router.delete("/:id",async (req,res) => {
  if(req.body.userId===req.params.id || req.body.isAdmin){
    try{
      const user=await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Your Account has been Deleted😭!!");
    }catch(err){
      return res.status(500).json(err);
    }
  }
  else{
    res.status(403).json("You can only delete your account only");
  }
});
//Find User
router.get("/:id",async(req, res)=>{
    try {
      const user = await User.findById(req.params.id);
      if(user!=null){
        const{password,...other} = user._doc;
        res.status(200).json(other);
      }
      else {
        res.status(404).json("No User Found!!");
      }
    }
    catch (err) {
      res.status(500).json(err);
    }
});
//Follow A User
  router.put("/:id/follow",async(req,res)=>{
    if(req.body.username!=req.params.id){
      try{
        const to_be_followed_user = await User.findById(req.params.id);
        const currentUser =await User.findById(req.body.userId);
        if(!to_be_followed_user.followers.includes(currentUser.username)){
          await to_be_followed_user.updateOne({$push:{followers:currentUser.username}});
          await currentUser.updateOne({$push:{following:to_be_followed_user.username}});
          res.status(200).json("User has been followed Successfully!!");
        }else{
          res.status(403).json("You already follow this user");
        }
      }
      catch(err){
        res.status(500).json(err);
      }
    }else{
      res.status(403).json("You can't follow yourself");
    }
  });
//Unfollow A User

module.exports=router;
