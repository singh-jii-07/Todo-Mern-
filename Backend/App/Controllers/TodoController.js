import Todo from '../Module/TodoModule.js'
let Todoinsert=async (req,res)=>{
    const {title,description,dueDate}=req.body;
    if (!title||!description||!dueDate){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
    const todo = new Todo({
      title,
      description,
    
      dueDate
    });

    await todo.save();

    res.status(201).json({
      message: "Todo added successfully",
      todo
    });
  } catch (error) {
    console.error("Error inserting todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const Todoget= async(req,res)=>{
    try{
        const todos= await Todo.find()
        res.status(201).json({
            message:"Todos fetched successfully",
            todos
        })
    }
    catch(error){
 res.status(500).json({ message: "Internal Server Error",error });
    }
}

export {
  Todoinsert,
  Todoget
};