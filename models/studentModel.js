const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");


const studentModel=new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"FirstName  is Required"],
        minLength:[4,"first name should be atleast 4character long"]
    },
    lastname:{
        type:String,
        required:[true,"lastName  is Required"],
        minLength:[4,"last name should be atleast 4character long"]
    },
    contact:{
        type:String,
        required:[true,"Contact  is Required"],
        maxLength:[10,"contact must not exceed 10character "],
        minLength:[10,"contact should be atleast 10character long"]
    },
    city:{
        type:String,
        required:[true,"City  is Required"],
        minLength:[3,"City name should be atleast 3character long"]
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"]
    },
    avtar:String,
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
    },
    resetPasswordToken:{
        type:Number,
        default:0
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