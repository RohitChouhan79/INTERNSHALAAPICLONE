const express=require("express");
const { homepage,currenUser,studentsignup,studentsignin,studentsignout } = require("../Controllers/indexContoller");
const { isAuthenticated } = require("../middlewares/auth");
const router=express.Router();

// Get / Route

router.get("/",homepage)


// post /student

router.post("/student",isAuthenticated,currenUser)

// post /student/Signup
router.post("/student/Signup",studentsignup)

// post /student/Signin
router.post("/student/Signin",studentsignin)

// get /student/Signout
router.get("/student/Signout",isAuthenticated,studentsignout)


module.exports=router; 