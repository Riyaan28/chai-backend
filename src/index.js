import mongoose from "mongoose";

;( async ()=>{
  try{
    mongoose.connect(`${process.env.MONGODB_URI}`)
  } catch(err){
    console.error("ERROR: ", err)
    throw err
  }
})()
