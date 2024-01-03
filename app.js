require("dotenv").config({path:"./.env"})
const express=require("express")
const  app=express();


// Db connection

require("./models/database").connectDatabase();


// logger

const logger=require("morgan");
app.use(logger("tiny"))


// Body parser hmesa routes se upar ata he
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// routes
app.use("/",require("./routes/indexRoutes"))

// error handling
const Errorhandler = require("./utils/ErrorHandle");
const { generatedErrors } = require("./middlewares/error");

app.all("*",(req,res,next)=>{
    next(new Errorhandler(`Requested URL not Found${req.url}`,404))
})
app.use(generatedErrors)

app.listen(
    process.env.Port,console.log(`Server runing at Port ${process.env.Port}` )
)

