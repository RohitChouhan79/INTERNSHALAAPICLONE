const express=require("express");
const { homepage,
    employesignup,
    employesignin,
employesignout,
currentemploye,
employesendmail,
employeforgetlink,
employeresetpassword,
employeupdate,
employeavatar,
 } = require("../Controllers/employeContoller");
const { isAuthenticated } = require("../middlewares/auth");
const router=express.Router();

// Get / Route

router.get("/",homepage)


// // post /student

router.post("/currentemploye",isAuthenticated,currentemploye)

// post /student/Signup
router.post("/Signup",employesignup)

// post /student/Signin
router.post("/Signin",employesignin)

// post /student/Signout
router.get("/Signout",isAuthenticated,employesignout)

// // post /student/send-mail
router.post("/Send-mail",employesendmail)

// // get /student/forget-link/:studentid
router.get("/forget-link/:id",employeforgetlink)

// // post /student/reset-password/;studentid
router.post("/reset-password/:id",isAuthenticated,employeresetpassword)

// // post /student/update/;studentid
router.post("/update/:id",isAuthenticated,employeupdate)

// // post /student/avatat/;studentid
router.post("/avatar/:id",isAuthenticated,employeavatar)


module.exports=router; 