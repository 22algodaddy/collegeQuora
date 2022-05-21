const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
   userId:{
     type: 'string'
   },
  desc:{
     type: 'string',
     max:1000
  },
  img:{
     type: 'string'
  },
  likes:{
     type:'Array',
    default: []
  }
},
  {timestamps:true}
);
module.exports=mongoose.model("Post",postSchema);
