const express=require("express");
const router=express.Router();

const {resume,addeducation,editeducation,deleteeducation,addjobs,
    editjobs,deletejobs,addinternship,editinternship,deleteinternship,addresposiblities,editresposiblities,deleteresposiblities} = require("../Controllers/resumeContoller");
const { isAuthenticated } = require("../middlewares/auth");

// Get / Route

router.get("/",isAuthenticated,resume)
// .......................................education routes..................

// Post /add-education

router.post("/add-education",isAuthenticated,addeducation)

// post /edit-education/:eduid

router.post("/edit-education/:eduid",isAuthenticated,editeducation);

// post  /delete-education/:eduid

router.post("/delete-education/:eduid",isAuthenticated,deleteeducation);

// .........................................Job routes......................


// post /add-jobs
router.post("/add-jobs",isAuthenticated,addjobs);

// post /edit-jobs/:eduid

router.post("/edit-jobs/:jobid",isAuthenticated,editjobs);
// post  /delete-education/:eduid

router.post("/delete-jobs/:jobid",isAuthenticated,deletejobs);

// ......................................Internship routes...................

// post /add-jobs
router.post("/add-intern",isAuthenticated,addinternship);

// post /edit-jobs/:eduid

router.post("/edit-intern/:internid",isAuthenticated,editinternship);
// post  /delete-education/:eduid

router.post("/delete-intern/:internid",isAuthenticated,deleteinternship);


// ......................................Internship routes...................

// post /add-jobs
router.post("/add-respons",isAuthenticated,addresposiblities);

// post /edit-jobs/:eduid

router.post("/edit-respons/:responsid",isAuthenticated,editresposiblities);
// post  /delete-education/:eduid

router.post("/delete-respons/:responsid",isAuthenticated,deleteresposiblities);

module.exports=router; 