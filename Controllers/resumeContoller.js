const { catchAsyncError } = require("../middlewares/catchAsyncError");
const Student=require("../models/studentModel");
const Errorhandler = require("../utils/ErrorHandle");
const { v4: uuidv4 } = require('uuid');


exports.resume=catchAsyncError(async(req,res,next)=>{   
    const{resume}=await Student.findById(req.id).exec()
    res.json({message:" Secured resume",resume});
})


exports.addeducation=catchAsyncError(async(req,res,next)=>{
    const student=await Student.findById(req.id).exec()
    student.resume.education.push({...req.body,id:uuidv4()})
    await student.save()
    res.json({message:" Education addded"});
})