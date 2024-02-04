const User = require("../Model/User");



async function getUsers(req,res)
{
    console.log("GGG");
        let users = await User.find();
        console.log(users);
        res.json({users:users})
}


module.exports = getUsers;