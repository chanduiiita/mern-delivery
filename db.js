const mongoose=require("mongoose");
var mongoURL='mongodb+srv://chandu_1:chandu_1@mern-delivery.73wfn.mongodb.net/mern-delivery'
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection
db.on('connected',()=>{
    console.log('monodb succesful')
})
db.on('error',()=>{
    console.log('monodb not succesful')
})
module.exports= mongoose