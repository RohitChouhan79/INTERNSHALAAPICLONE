require("dotenv").config({path:"./.env"})
const express=require("express")
const  app=express();

// logger

const logger=require("morgan");
const Errorhandler = require("./utils/ErrorHandle");
const { generatedErrors } = require("./middlewares/error");
app.use(logger("tiny"))


// routes
app.use("/",require("./routes/indexRoutes"))

// error handling

app.all("*",(req,res,next)=>{
    next(new Errorhandler(`Requested URL not Found${req.url}`,404))
})
app.use(generatedErrors)

app.listen(
    process.env.Port,console.log(`Server runing at ${process.env.Port}` )
)

