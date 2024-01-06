const mongoose=require("mongoose");



const jobModel=new mongoose.Schema({
    profile:String,
    skill:String,
    jobtype:{
        type:String,
        enum:["In office","Remote"]
    },
    openings:Number,
    description:String,
    preference:String,
    Salary:Number,
    perks:String,
    assesments:String,
},{timestamps:true})


const Job=mongoose.model("job",jobModel)

module.exports=Job