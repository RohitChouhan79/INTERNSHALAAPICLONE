const express=require("express");
const { homepage } = require("../Controllers/indexContoller");
const router=express.Router();

// Get / Route

router.get("/",homepage)


module.exports=router; 