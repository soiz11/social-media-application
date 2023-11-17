// const mongoose = require("mongoose");
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type :String,
            required : [true, "please enter product name"]
        },
        email:{
            type: String,
            required:true,
            unique: true,
        },
        password:{
            type: String,
            required:true,
            minlength:6,
        },
        blogs:[{
            type:mongoose.Types.ObjectId,
            ref:"Blog",
            required:"true"
        }]
    },
    
)

export default mongoose.model("User",userSchema)
/*
const Product = mongoose.model("Product",productSchema);
module.exports = Product;*/