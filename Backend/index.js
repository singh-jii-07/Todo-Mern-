import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './App/Routes/TodoRoutes.js'

dotenv.config();


const app = express();
app.use(express.json());

app.use('/api/todo', todoRoutes)


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