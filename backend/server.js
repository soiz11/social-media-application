// const express = require("express");
// const mongoose = require("mongoose");
// const {  router } = require("./routes/user-routes");

import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogrouter from "./routes/blog-routes";

const app = express();

const PORT = 5000;

// app.use("/",(req,res)=>{
//     res.send("hello");
// })
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogrouter);


const dbUrl = "mongodb+srv://socialadmin:apppassword@social-api.qc2z3ti.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbUrl)
 .then(()=>{
    console.log("connected to mongoDB");
    app.listen(PORT,()=>{
        console.log(`node running on port ${PORT}`);
    })
     
 })
 .catch((e)=>{
    console.log("db connection error :",e);
 })