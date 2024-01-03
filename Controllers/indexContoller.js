const { catchAsyncError } = require("../middlewares/catchAsyncError");
const Student=require("../models/studentModel");
const Errorhandler = require("../utils/ErrorHandle");

exports.homepage=catchAsyncError(async(req,res,next)=>{
    res.json({message:"Homepage"});
})

exports.studentsignup=catchAsyncError(async(req,res,next)=>{
    const student= await new Student(req.body).save();
    res.status(201).json(student)
})

exports.studentsignin=catchAsyncError(async(req,res,next)=>{
    const student= await Student.findOne({email:req.body.email})
    .select("+password")
    .exec();

    if (!student) return next(new Errorhandler("User not found by this email address",404))

    const isMatch=student.comparepassword(req.body.password)

    if(!isMatch) return next(new Errorhandler("Wrong Password",402))
    res.json(student)
})

exports.studentsignout=catchAsyncError(async(req,res,next)=>{
    
})