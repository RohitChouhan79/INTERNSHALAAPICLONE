const { catchAsyncError } = require("../middlewares/catchAsyncError");
const Student=require("../models/studentModel");
const Errorhandler = require("../utils/ErrorHandle");
const { v4: uuidv4 } = require('uuid');


exports.resume=catchAsyncError(async(req,res,next)=>{   
    const{resume}=await Student.findById(req.id).exec()
    res.json({message:" Secured resume",resume});
})

// Education...........................................................................................

exports.editeducation=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const eduindex=student.resume.education.findIndex(
        (i)=>i.id===req.params.eduid
    );
    student.resume.education[eduindex]={
        ...student.resume.education[eduindex],
        ...req.body,
    }
    await student.save()
    res.json({message:" Education updated"});
})

exports.addeducation=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    student.resume.education.push({...req.body,id:uuidv4()})
    await student.save()
    res.json({message:" Education Added"});
})


exports.deleteeducation=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const filtereducation=student.resume.education.filter(
        (i)=>i.id !== req.params.eduid
    );
    student.resume.education=filtereducation;
    await student.save()
    res.json({message:" Education deleted"});
})

// Jobs...........................................................................................

exports.addjobs=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    student.resume.jobs.push({...req.body,id:uuidv4()})
    await student.save()
    res.json({message:" Jobs added"});
})


exports.editjobs=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const jobindex=student.resume.jobs.findIndex(
        (i)=>i.id===req.params.jobid
    );
    student.resume.jobs[jobindex]={
        ...student.resume.jobs[jobindex],
        ...req.body,
    }
    await student.save()
    res.json({message:" Jobs updated"});
})

exports.deletejobs=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const filterJobs=student.resume.jobs.filter(
        (i)=>i.id !== req.params.jobid
    );
    student.resume.jobs=filterJobs;
    await student.save()
    res.json({message:" Job deleted"});
})

// INternship.................................................................................



exports.addinternship=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    student.resume.internships.push({...req.body,id:uuidv4()})
    await student.save()
    res.json({message:" internships added"});
})


exports.editinternship=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const internindex=student.resume.internships.findIndex(
        (i)=>i.id===req.params.internid
    );
    student.resume.internships[internindex]={
        ...student.resume.internships[internindex],
        ...req.body,
    }
    await student.save()
    res.json({message:" internships updated"});
})


exports.deleteinternship=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const filterintern=student.resume.internships.filter(
        (i)=>i.id !== req.params.internid
    );
    student.resume.internships=filterintern;
    await student.save()
    res.json({message:" internships deleted"});
})


// resposiblities.....................................................................................
exports.addresposiblities=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    student.resume.resposiblities.push({...req.body,id:uuidv4()})
    await student.save()
    res.json({message:"resposiblities added"});
})


exports.editresposiblities=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const responsindex=student.resume.resposiblities.findIndex(
        (i)=>i.id===req.params.responsid
    );
    student.resume.resposiblities[responsindex]={
        ...student.resume.resposiblities[responsindex],
        ...req.body,
    }
    await student.save()
    res.json({message:" resposiblities updated"});
})


exports.deleteresposiblities=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    const filterrespons=student.resume.resposiblities.filter(
        (i)=>i.id !== req.params.responsid
    );
    student.resume.resposiblities=filterrespons;
    await student.save()
    res.json({message:" resposiblities deleted"});
})