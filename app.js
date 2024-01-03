require("dotenv").config({path:"./.env"})
const express=require("express")
const  app=express();


app.listen(
    process.env.Port,console.log(`Server runing at ${process.env.Port}` )
)

