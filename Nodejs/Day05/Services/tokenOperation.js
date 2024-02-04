const jwt = require("jsonwebtoken");
const util = require("util");
const signAsync = util.promisify(jwt.sign)
const verifyAsync = util.promisify(jwt.verify)



function generateTokenAsync(req , res , next){
        let {username} = req.body;
        signAsync({username},"ITI" , {
            expiresIn:"6d"
        }).then((value)=>{
            req.userGenerator = value
            next()
        }).catch(()=>{
            throw "generated Token";
        })

}


function verifyTokenAsync(req , res , next)
{
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        verifyAsync(token,"ITI").then((value)=>{
            console.log(value);
            req.user = value;
            next()
        }).catch(()=>{
            throw "verfiy token";
        })
    } catch {
        throw "verfiy catch token";
    }


}

module.exports = {generateTokenAsync , verifyTokenAsync}
