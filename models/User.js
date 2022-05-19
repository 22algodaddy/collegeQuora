const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  username:{
    type: 'string',
    required: true,
    min:4,
    max:10,
    unique: true
  },
  email:{
    type: 'string',
    required:true,
    max:50,
    unique: true
  },
  password:{
    type: 'string',
    min:8,
    required: true
  },
  profilePicture:{
    type: 'string',
    default: ''
  },
  coverPicture:{
    type: 'string',
    default: ''
  },
  followers:{
    type: 'array',
    default: []
  },
  following:{
    type: 'array',
    default: []
  },
  isAdmin:{
    type: 'boolean',
    default: false
  },
  desc:{
    type:'string',
    max:50
  },
  city:{
    type: 'string',
    max:20
  },
  from:{
    type:'string',
    max:20
  }
},
  {timestamps:true}
);
module.exports=mongoose.model("User",userSchema);
