const express=require("express");
const router=express.Router();

const {resume,addeducation,editeducation,deleteeducation,addjobs,
    editjobs,deletejobs,addinternship,editinternship,deleteinternship,addresposiblities,editresposiblities,deleteresposiblities,
addcourses,editcourses,deletecourses,addprojects,editprojects,deleteprojects,addskills,editskills,deleteskills,addaccomplishments,
editaccomplishments,deleteaccomplishments} = require("../Controllers/resumeContoller");
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


// ......................................resposiblities routes...................

// post /add-jobs
router.post("/add-respons",isAuthenticated,addresposiblities);

// post /edit-jobs/:eduid

router.post("/edit-respons/:responsid",isAuthenticated,editresposiblities);
// post  /delete-education/:eduid

router.post("/delete-respons/:responsid",isAuthenticated,deleteresposiblities);

// .................................courses routes................................
// post /add-jobs
router.post("/add-course",isAuthenticated,addcourses);

// post /edit-jobs/:eduid

router.post("/edit-course/:courseid",isAuthenticated,editcourses);
// post  /delete-education/:eduid

router.post("/delete-course/:courseid",isAuthenticated,deletecourses);

// .................................projects routes................................
// post /add-jobs
router.post("/add-project",isAuthenticated,addprojects);

// post /edit-jobs/:eduid

router.post("/edit-project/:projectid",isAuthenticated,editprojects);
// post  /delete-education/:eduid

router.post("/delete-project/:projectid",isAuthenticated,deleteprojects);

// ................................skills routes............................

// post /add-jobs
router.post("/add-skill",isAuthenticated,addskills);

// post /edit-jobs/:eduid

router.post("/edit-skill/:skillid",isAuthenticated,editskills);
// post  /delete-education/:eduid

router.post("/delete-skill/:skillid",isAuthenticated,deleteskills);

// .............................accomplishments routes......................

// post /add-jobs
router.post("/add-accom",isAuthenticated,addaccomplishments);

// post /edit-jobs/:eduid

router.post("/edit-accom/:accomid",isAuthenticated,editaccomplishments);
// post  /delete-education/:eduid

router.post("/delete-accom/:accomid",isAuthenticated,deleteaccomplishments);

module.exports=router; 