
// const express = require("express");
// const { getAllUser } = require("../controllers/user.controller");
import express from "express";
import { getAllUser, login, signUp } from "../controllers/user.controller";

const router = express.Router();

router.get("/",getAllUser);
router.post("/signup",signUp);
router.post("/login",login);

export default router;