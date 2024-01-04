const { catchAsyncError } = require("../middlewares/catchAsyncError");
const Student=require("../models/studentModel");
const Errorhandler = require("../utils/ErrorHandle");
const { sendtokens } = require("../utils/SendToken");

exports.homepage=catchAsyncError(async(req,res,next)=>{
    res.json({message:" Secured Homepage"});
})

exports.currenUser=catchAsyncError(async(req,res,next)=>{
    const student= await Student.findById(req.id).exec()
    res.json({student});
})

exports.studentsignup=catchAsyncError(async(req,res,next)=>{
    const student= await new Student(req.body).save();
    // res.status(201).json(student)
    sendtokens(student,201,res)
})

exports.studentsignin=catchAsyncError(async(req,res,next)=>{
    const student= await Student.findOne({email:req.body.email})
    .select("+password")
    .exec();

    if (!student) return next(new Errorhandler("User not found by this email address",404))

    const isMatch=student.comparepassword(req.body.password)

    if(!isMatch) return next(new Errorhandler("Wrong Password",402))
    // res.json(student)
    sendtokens(student,200,res)

})

exports.studentsignout=catchAsyncError(async(req,res,next)=>{
    res.clearCookie("token");
    res.json({message:"Succesfully signout"})
})