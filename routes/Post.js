const router= require("express").Router();
const Post = require("../models/post.js");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
//Create A Post
router.post("/",async (req,res)=>{
  const newPost=new Post(req.body);
  try{
    const savedPost=await newPost.save();
    res.status(200).json(savedPost);
  }
  catch(err){
    res.status(500).json(err);
  }
});
//Update A Post
router.put("/:id",async (req, res)=>{
  try{
      let outdatedPost = await Post.findById(req.params.id);
      if(outdatedPost.userId===req.body.userId){
        await outdatedPost.updateOne({$set:req.body});
        res.status(200).json("Post Updated Succesfully");
      }
      else{
          res.status(403).json("Access Forbidden,you can update your post only");
      }
  }
  catch(err){
    res.status(404).json("Something is wrong");
  }
});
module.exports = router;
