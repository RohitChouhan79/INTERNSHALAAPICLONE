exports.generatedErrors=(err,req,res,next)=>{
    const statusCode=err.statusCode ||500;    //Agr koi statusCodeni aa rha to vo 500 dikha dega
    res.status(statusCode).json({
        message:err.message,
        errName:err.name,
        // stack:err.stack
    }) 
}