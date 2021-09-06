const db = require('../model/index')
const User = db.user
const ROLES = db.role


checkUsernameAndInput = (req,res,next) =>{
    try {
        const oldUser = await User.findOne(req.body.email);
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
      } catch (err) {
        console.log(err);
    }
    next()
}

checkRole = (req,res,next) =>{
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
          if (!ROLES.includes(req.body.roles)) {
            res.status(400).send({
              message: `Failed! Role ${req.body.roles} does not exist!`
            });
            return;
          }
        }
      }
      next();
}

module.exports = {
    checkUsernameAndInput,
    checkRole
}





