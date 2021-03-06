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
//Delete A Post

router.delete("/:id",async (req, res)=>{
  try{
    let deletePost = await Post.findById(req.params.id);
    if(deletePost.userId===req.body.userId){
      await deletePost.deleteOne();
      res.status(200).json("Post Deleted Succesfully");
    }
    else{
      res.status(403).json("Access Forbidden,you can delete your post only");
    }
  }
  catch(err){
    res.status(404).json("Something is wrong");
  }
});
//Like&Dislike Post Module
router.put("/:id/like",async (req, res)=>{
  try{
    const post= await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId)){
      await post.updateOne({$push:{likes:req.body.userId}});
      res.status(200).json("Post Liked Successfully!!");
    }
    else{
      await post.updateOne({$pull:{likes:req.body.userId}});
      res.status(200).json("Post disliked Successfully");
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});
//Get A Post
router.get('/:id/like',async (req,res) => {
  try{
    const post = await Post.findById(req.params.id);
    if(post!=null){
      res.status(200).json(post);
    }
    else{
      res.status(403).json("Post not found");
    }
  }
  catch(err){
    res.status(500).json(err);
  }
})
module.exports = router;
