import Todo from '../Module/TodoModule.js'
let Todoinsert=async (req,res)=>{
    const {title,description,completed,dueDate}=req.body;
    if (!title||!description||!completed||!dueDate){
        return res.status(400).json({message:"All fields are required"});
    }
    try {
    const todo = new Todo({
      title,
      description,
      completed,
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
export default Todoinsert;