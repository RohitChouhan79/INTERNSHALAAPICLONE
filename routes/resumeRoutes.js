const express=require("express");
const router=express.Router();

const {resume,addeducation} = require("../Controllers/resumeContoller");
const { isAuthenticated } = require("../middlewares/auth");

// Get / Route

router.get("/",isAuthenticated,resume)

// Post /

router.post("/add-education",isAuthenticated,addeducation)


module.exports=router; 