const express=require("express");
const { homepage,currenUser,studentsignup,studentsignin,studentsignout,studentsendmail ,studentforgetlink,studentresetpassword} = require("../Controllers/indexContoller");
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

// post /student/Signout
router.get("/student/Signout",isAuthenticated,studentsignout)

// post /student/send-mail
router.post("/student/Send-mail",studentsendmail)

// get /student/forget-link/:studentid
router.get("/student/forget-link/:id",studentforgetlink)

// post /student/reset-password/;studentid
router.post("/student/reset-password/:id",isAuthenticated,studentresetpassword)


module.exports=router; 