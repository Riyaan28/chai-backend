//require("dotenv").config({path: "./.env"}) ;

import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js" these two are only needed if we are using method 2 of connecting to the database and starting the server


dotenv.config({path: "./env"});


connectDB();





/* this is method 2 of connecting to the database and starting the server , we are using method 1 in this project but this is just for reference
;( async ()=>{
  try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.error("ERROR: ", error)
      throw error
    })
    app.listen(process.env.port, ()=>{
      console.log(`Server is running on port ${process.env.port}`);
    })
  } catch(err){
    console.error("ERROR: ", err)
    throw err
  }
})()
*/
