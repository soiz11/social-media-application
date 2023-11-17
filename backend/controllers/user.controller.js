
import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUser = async (req,res,next)=>{
    let users;
    try{
        users = await User.find();
    }
    catch(e){
       console.log(e); 
    }
    if(!users){
        return res.status(404).json({message:"no user found"})
    }
    return res.status(200).json({users})
    }

export const signUp = async(req,res,next)=>{
    const {name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(e){
        console.log(e)
    }
    if(existingUser){
        return res.status(400).json({message:"alredy user exists"})
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password:hashedPassword,
        blogs:[]
    });
    try{
        await user.save();
       }
       catch(e){
        console.log(e,message);
       
       }

    return res.status(200).json(user)
}


export const login = async(req,res)=>{
    const {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }
    catch(e){
        console.log(e)
    }
    if(!existingUser){
        return res.status(404).json({message:"cannot find a account please signup first"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(404).json({message:"incorrect password"})
    }
    return res.status(200).json({message:"login successfull"})
}