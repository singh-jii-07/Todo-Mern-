import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
        minlength: 6,  
}

})
const todoUser = mongoose.model('TodoUser', todoSchema);
export default todoUser;