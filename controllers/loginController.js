var User = require('../db/models/').User;
var jwt = require('jwt-simple');
module.exports = async function(req, res, next) {
  var emailId = req.body.emailId;
  var password = req.body.password;
  if (emailId != null){
    user = await User.findOne({
      where: { email : emailId}
    })
    if(user == null){
      res.json({userNotFound:"No user with this Email Address !", correctUser:"false"});
    } else {

      if(password == user.password){
        var token = jwt.encode({id:user.id}, "Your Secret code");
        res.json({userToken:token,email:user.email,firstname:user.firstName,lastname:user.lastName,id:user.id,correctUser:"true"});

      } else{
        var data = {"message" : "Wrong user name or password", correctUser:"false"};

        res.json(data);
      }
    }

  } else {
    res.json({noEmail:"There is no user name!", correctUser:"false"});
  }

}
