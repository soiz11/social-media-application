import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title:{
            type :String,
            required : [true, "please enter product name"]
        },
        description:{
            type: String,
            required:true,
        },
        image:{
            type: String,
            
        },
        user:{
            type :mongoose.Types.ObjectId,
            ref:"User",
            required : true
        },
    },
    
)

export default mongoose.model("Blog",blogSchema)