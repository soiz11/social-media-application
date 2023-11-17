import express from "express";
import { addBlogs, deleteBlogById, getAllBlogs, getBlogById, getByUserId, updateBlog } from "../controllers/blog-controller";


const blogrouter = express.Router();

blogrouter.get("/",getAllBlogs);
blogrouter.post("/add",addBlogs);
blogrouter.put("/update/:id",updateBlog);
blogrouter.get("/:id",getBlogById);
blogrouter.delete("/:id",deleteBlogById);
blogrouter.get("/user/:id",getByUserId);

export default blogrouter;