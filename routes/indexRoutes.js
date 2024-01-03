const express=require("express");
const { homepage,studentsignup,studentsignin,studentsignout } = require("../Controllers/indexContoller");
const router=express.Router();

// Get / Route

router.get("/",homepage)


// post /student/Signup
router.post("/student/Signup",studentsignup)

// post /student/Signin
router.post("/student/Signin",studentsignin)

// get /student/Signout
router.get("/student/Signout",studentsignout)


module.exports=router; 