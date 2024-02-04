const mongoose = require("mongoose")
require("dotenv").config();

const connectionDB = process.env.CONNECTIONDATABASE
//console.log(connectionDB);

function connect(){
    mongoose.connect(connectionDB)
    .then(()=>{
        console.log("Database is running");
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = connect