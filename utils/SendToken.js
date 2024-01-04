// ye jab chalega jb user login hoga or register hoga 
// yha apn ne call kiya he gettokens function ko
exports.sendtokens=(student,statuscode,res)=>{
    const token=student.getjwttoken();
    res.json({token});
}