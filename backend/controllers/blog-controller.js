import mongoose from "mongoose";
import Blog from "../models/Blog";
import User from "../models/User";

export const getAllBlogs = async(req,res)=>{
    let blogs
    try{
        blogs = await Blog.find({})
    }
    catch(e){
        console.log(e)
    }
    if(!blogs){
        return res.status(404).json({message:"no blogs to show"})
    }
    return res.status(200).json({blogs});
}

export const addBlogs = async(req,res)=>{
    const {title,description,image,user} = req.body;
    
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }
    catch(e){
        return res.status(400).json({message:"unable to find user by id"})
    }
    const blog = new Blog({
        title,
        description,
        image,
        user
    })
    try{
       const session = await mongoose.startSession();
       session.startTransaction();
       await blog.save({session});
       existingUser.blogs.push(blog);
       await existingUser.save({session})
       await session.commitTransaction();
    }
    catch(e){
        console.log(e)
        return res.status(500).json({message:err})
    }
    return res.status(200).json({blog});
}

export const updateBlog = async(req,res)=>{
    const {title, description} = req.body;
    const blogId = req.params.id;
    let blog
    try{
        blog = await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        });
    } 
    catch(e){
        return console.log(e)
    }
    if(!blog){
        return res.status(500).json({message:"cannot update"})
    }
    return res.status(200).json({blog})
}

export const getBlogById = async(req,res)=>{
    let blog;
    const blogId = req.params.id;
    try{
        blog = await Blog.findById(blogId)
    }
    catch(e){
        return console.log(e)
    }
    if(!blog){
        return res.status(404).json({message:"there is no any blog"})
    }
    return res.status(200).json({blog})

}

export const deleteBlogById = async(req,res)=>{
    let blog;
    const blogId = req.params.id;
    try{
        blog = await Blog.findByIdAndDelete(blogId).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } 
    catch(e){
        return console.log(e)
    }
    if(!blog){
        return res.status(500).json({message:"unable to delete"})
    }
    return res.status(200).json({message:"sucessfully deleted"})

}

export const getByUserId = async(req,res)=>{
    const userId = req.params.id;
    let userBlogs;
    try{
        userBlogs = await User.findById(userId).populate("blogs");
    }
    catch(e){
        return console.log(e)
    }
    if(!userBlogs){
        return res.status(404).json({message:"no blogs found"})
    }
    return res.status(200).json({blogs:userBlogs})
}