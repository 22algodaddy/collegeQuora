const express = require('express')
const dotenv = require('dotenv')
const mongoose =require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const MONGO_URL ="mongodb+srv://choubey:dhruv@cluster0.pppfe.mongodb.net/userData?retryWrites=true&w=majority";
const app = express();
app.listen(3000,()=>{
});
mongoose.connect(MONGO_URL,()=>{
});
const userRoute=require(__dirname+"/routes/users.js");
const auth=require(__dirname+"/routes/auth.js")
app.use("/user",userRoute);
app.use("/auth",auth);
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.get("/",function(req,res){
  res.send("Welcome to our HomePage");
});
app.get("/loginpage",function(req,res){
  res.send("Welcome to our LoginPage");
});
