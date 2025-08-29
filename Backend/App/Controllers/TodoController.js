import Todo from '../Module/TodoModule.js'

let Todoinsert=async (req,res)=>{
    const {title,description,dueDate}=req.body;
    const userId = req.user.id;

    if (!title||!description||!dueDate){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
    const todo = new Todo({
      title,
      description,
      userid: userId, 
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
 const TodoDelet= async (req, res)=>{
     try{
        const {id}=req.headers
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const todo=await Todo.findByIdAndDelete(id)
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
}
            catch(err){
                res.status(500).json({ message: "Internal Server Error", error: err.message });
            }
 }
 const TodoUpadate= async (req,res)=>{
  try{
  const {id}=req.headers;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const TodoUpadate= await Todo.findByIdAndUpdate(id,{
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate
  }, { new: true });
  if (!TodoUpadate) {
    return res.status(404).json({ message: "Todo not found" });
  }
  res.status(200).json({
    message: "Todo updated successfully",
    TodoUpadate });

  }
  catch (err){
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
 }
 const TodogetByUser = async (req, res) => {
  try {
    const { userid } = req.headers;  
    if (!userid) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const todos = await Todo.find({ userid });

    if (todos.length === 0) {
      return res.status(404).json({ message: "No todos found for this user" });
    }

    res.status(200).json({
      message: "Todos fetched successfully for user",
      todos
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export {
  Todoinsert,
  Todoget,
  TodoDelet,
  TodoUpadate,
  TodogetByUser
};