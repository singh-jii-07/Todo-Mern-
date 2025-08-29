import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './App/Routes/TodoRoutes.js'
import todouserRoute from './App/Routes/TodoUserRoutes.js';
import cors from "cors";
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/todo', todoRoutes)
app.use('/api/todo',todouserRoute)


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