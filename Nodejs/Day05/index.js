const express = require("express");
const morgan = require("morgan");
const authRoute = require("./Routes/authRouter")
const adminRoute = require("./Routes/adminRouter")
const connect = require("./db")

require("dotenv").config();
const port = process.env.PORT;

const app = express();
//logger
app.use(morgan("dev"));

//parse
app.use(express.json())



//route
app.use("/auth", authRoute)
app.use("/admin",adminRoute)

//database Connect
connect()
//listen server
app.listen(port,()=>{
    console.log("Server is Running on port 5000")
})