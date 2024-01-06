const { catchAsyncError } = require("../middlewares/catchAsyncError");
const Employe=require("../models/employeModel");
const Errorhandler = require("../utils/ErrorHandle");
const { sendtokens } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path=require("path")
const imagekit=require("../utils/ImageKit").initimagekit()

exports.homepage=catchAsyncError(async(req,res,next)=>{
    res.json({message:" Secured employe Homepage"});
})

exports.currentemploye=catchAsyncError(async(req,res,next)=>{
    const employe= await Employe.findById(req.id).exec()
    res.json({employe});
})

exports.employesignup=catchAsyncError(async(req,res,next)=>{
    const employe= await new Employe(req.body).save();
    // res.status(201).json(employe)
    sendtokens(employe,201,res)
})

exports.employesignin=catchAsyncError(async(req,res,next)=>{
    const employe= await Employe.findOne({email:req.body.email})
    .select("+password")
    .exec();

    if (!employe) return next(new Errorhandler("User not found by this email address",404))

    const isMatch=employe.comparepassword(req.body.password)

    if(!isMatch) return next(new Errorhandler("Wrong Password",402))
    // res.json(student)
    sendtokens(employe,200,res)

})

exports.employesignout=catchAsyncError(async(req,res,next)=>{
    res.clearCookie("token");
    res.json({message:"Succesfully signout"})
})


exports.employesendmail=catchAsyncError(async(req,res,next)=>{
    const employe= await Employe.findOne({email:req.body.email}).exec();

    if (!employe) return next(new Errorhandler("User not found by this email address",404))

    const url=`${req.protocol}://${req.get("host")}/employe/forget-link/${employe._id}`

    sendmail(req,res,next,url);
    employe.resetPasswordToken=1
    await  employe.save()
    res.json({employe,url})
})

exports.employeforgetlink=catchAsyncError(async(req,res,next)=>{
    const employe= await Employe.findById(req.params.id).exec();

    if (!employe) return next(new Errorhandler("User not found by this email address",404))

    
    if(employe.resetPasswordToken==1){
        employe.resetPasswordToken=0;   
        employe.password=req.body.password;
        await employe.save();
    }else{
        return next(
            new Errorhandler("Invalid Reset password link! please try again",500 )
        )
    }
   res.status(200).json({
    message:"Password changed succesfully"
   })
})

exports.employeresetpassword=catchAsyncError(async(req,res,next)=>{
    const employe= await Employe.findById(req.id).exec();
    employe.password=req.body.password;
    await employe.save();

    sendtokens(employe,200,res) 
})


exports.employeupdate=catchAsyncError(async(req,res,next)=>{
    await Employe.findByIdAndUpdate(req.params.id,req.body).exec();
    res.status(200).json({
        sucess:true,
        message:"employe update Suceesfully",
       
    })
    // sendtokens(student,201,res)
}) 


exports.employeavatar=catchAsyncError(async(req,res,next)=>{
    const employe=await Employe.findById(req.params.id).exec()
    const file=req.files.organizationlogo
    const modifiedFileName=`organization-${Date.now()}${path.extname(file.name)}`

    if(employe.organizationlogo.fileId !== ""){
        await imagekit.deleteFile(employe.organizationlogo.fileId)
    }

    const {fileId,url} =await imagekit.upload({
        file:file.data,
        fileName:modifiedFileName
    })

    employe.organizationlogo={fileId,url}
    await employe.save()    
    // res.json({image})
    res.status(200).json({
        sucess:true,
        message:"Profile Uploded Succesfully"
       })
}) 