import todoUser from '../Module/TodoUser'
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
            error: err.message
        })
    }
}
export {
    totoresgister
}