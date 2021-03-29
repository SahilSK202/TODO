const mongoose = require('mongoose');

const uri = 'mongodb+srv://sahiluser:sahilpassword@cluster0.de2sm.mongodb.net/TODO?retryWrites=true&w=majority'

const connectDB = async() =>{
  return mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true } , err =>{
    if (err){
      console.log("Connection to DB failed !");
    }
    else{
      console.log("Connected to DB , YO !");
    }
  });
}

const db = mongoose.connection;
db.on("error" , console.error.bind(console , "MongoDB connection error"));

module.exports = connectDB