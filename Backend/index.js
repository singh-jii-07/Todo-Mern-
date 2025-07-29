import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


const app = express();


mongoose.connect(process.env.MONGO_URI )
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => { 
      console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});