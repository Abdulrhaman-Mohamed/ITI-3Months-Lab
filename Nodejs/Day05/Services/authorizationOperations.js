

function checkRole(role)
{
    return function(req,res,next){
        try {
            let myStorageRole = req.user.role
            console.log(myStorageRole);
            if(role !==  myStorageRole)
            {
                res.json({message:"You are not authorization"})
                return;
            } 

            next();
        } catch {
            throw "Some thing error in check Role"
        }



    }
}



module.exports = checkRole;