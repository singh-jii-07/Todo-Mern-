import todoUser from '../Module/TodoUser.js'
let totoresgister= async (req,res)=>{
    const {name,email,password}=req.body;
    if (!name || !email || !password) {
        return res.status(400).json({message:"All fields are required"});
    }
    try{
        const user= new todoUser({
            name,
            email,
            password
        })
        await user.save();
        res.status(201).json({
            message:"User registered successfully",
            user
        })
    }
    catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            error: err
        })
    }
}

let todologin =async (req,res)=>{
    const  {name,password}=req.body;
    if (!name || !password) {
        return res.status(400).json({message:"All fields are required"});
    }
    try{
        const  user=await todoUser.findOne({name});
        if (!user) {
            return res.status(404).json({message:"User not found"});
        }
          const token = jwt.sign(
      { id: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1h" } 
    );
        res.status(200).json({
            message:"User logged in successfully",
            token
        })
    }
    catch(err){
        res.status(500).json({
            message:"Internal Server Error",
            error: err
        })
    }
}
export {
    totoresgister,
    todologin
}