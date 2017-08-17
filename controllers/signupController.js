var jwt = require('jwt-simple');
var User = require('../db/models/').User;
var Stylist = require('../db/models/').Stylist;
var Salons = require('../db/models/').Salons;
var userTypeUser = require('../db/models/').userTypeUser;

module.exports = async function(req, res){
  var firstname = req.body.firstname;
  var email = req.body.email;
  users = await User.findAll({
    where: { email : email}
  })
      if(users.length==0){
        user = await User.create({
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          age: req.body.age,
          location: req.body.location,
          gender: req.body.gender,
          email: req.body.email,
          password: req.body.password,
          email: req.body.email
        })
            if(req.body.stylist){

              await Stylist.create({
                stylistId : user.id,
                condition : req.body.condition,
                description : req.body.description

              })

              await userTypeUser.create({
                userId : user.id,
                userTypeId : 1

              })
            }

            if(req.body.salon){
                await Salons.create({
                userId : user.id,
                salonName : req.body.salonName
              })
              userTypeUser.create({
                userId : user.id,
                userTypeId : 2
              })
            }
            var mess = {users:user,correctAccount:"true"}
            res.json(mess);

      } else{
          res.json({signupError:"Account is already there !",correctAccount:"false"});
        }

}
