const User = require("../Model/User")
const bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken');

async function authRegsiter(req ,res)
{

    try{
        
        let {username , password , role} = req.body;
        let hashpassword = await bcrypt.hash(password,8)
        let token = jwt.sign({username ,role},"ITI",{
            expiresIn:"60m",
        })
        //console.log(hashpassword);
        // await User.create({username , password:hashpassword,token:req.userGenerator})
        await User.create({username , password:hashpassword , role})
        res.status(200).json({
            message : `Welcome ${username}`,
            token:token
        })
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            message : `please add your username and password`
        })
    }
}


async function authLogin(req ,res)
{

    try {
        let {username , password} = req.body;


        if(Object.keys(req.body).length === 0) 
        {
            console.log(err);
            res.status(404).json({
                message : `please add your username and password`
            })
        }

        let userget = await User.findOne({username})

        if(!userget) res.status(404).json({message : `Please Regsiter First Then login`})

        let checkerPassword = await bcrypt.compare(password,userget.password);

        if(!checkerPassword) res.status(404).json({message : `Make sure that your password is correct`})

        res.status(200).json({
            message : `Welcome ${username}`
        })


    } catch (err) {
        console.log(err);
        res.status(404).json({
            message : `please add your username and password`
        })
    }

}


module.exports = {authLogin , authRegsiter}