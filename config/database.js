//instance of mongoose 
const mongoose = require('mongoose');


require("dotenv").config();
// to establish connection between your application and db
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("db connected")})
    .catch((error)=>{
        console.log("not connected");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;