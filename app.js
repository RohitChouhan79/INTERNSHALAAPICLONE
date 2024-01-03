require("dotenv").config({path:"./.env"})
const express=require("express")
const  app=express();

// logger

const logger=require("morgan");
app.use(logger("tiny"))


// routes
app.use("/",require("./routes/indexRoutes"))



app.listen(
    process.env.Port,console.log(`Server runing at ${process.env.Port}` )
)

