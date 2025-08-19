import mongoose from 'mongoose';
 
const todoSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userid: {   
    type: String,
    required: true
  }
})
const Todo=mongoose.model('Todo', todoSchema);
export default Todo;