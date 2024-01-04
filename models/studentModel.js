const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


const studentModel=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:[true,"Email  is Required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
         'Please fill a valid email address']
    },
    password:{
        type:String,
        select:false,
        maxLength:[15,"Password shhould not exceed more then 15 characters"],
        minLength:[6,"Password shhould have atleast  then 6 characters"],
        // match: 
    }
},{timestamps:true})

//npm i bcryptjs for bcrypt the password so no body can access


studentModel.pre("save",function(){
    if(!this.isModified("password")){
        return;
    }
    let salt=bcrypt.genSaltSync(10);
    this.password=bcrypt.hashSync(this.password,salt)
})

studentModel.methods.comparepassword=function(password){
    return bcrypt.compareSync(password,this.password)
}

// Create and call JSONWEBTOKEN
studentModel.methods.getjwttoken=function(){
return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
    expiresIn:process.env.JWT_EXPIRE,
})
}; 
const Student=mongoose.model("student",studentModel)

module.exports=Student