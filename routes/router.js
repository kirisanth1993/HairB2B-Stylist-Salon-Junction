module.exports = function(app) {
  var User = require('../db/models/').User;
  var Stylist = require('../db/models/').Stylist;
  var Salons = require('../db/models/').Salons;
  var skillsJobTypeStylists = require('../db/models/').skillsJobTypeStylists;
  var skills = require('../db/models/').skills;
  var jobTypeStylists = require('../db/models/').jobTypeStylists;
  var userTypeUser = require('../db/models/').userTypeUser;
  var userType  = require('../db/models/').userType
  var jobType  = require('../db/models/').jobType
  var jwt = require('jwt-simple');

  const signup = require('../controllers/signupController');
  app.post('/signup',signup);

  const login = require('../controllers/loginController');
  app.post('/login', login);

////////////////////////////////////
  app.post('/simpleSearch',function(req, res){
    var name = req.body.name;
    User.findAll({
      where:{firstname:{$like:'%'+name+'%'}}
    }).then(users => {
      var userIdArray = users.map(function(user){
        return user.id;
      });
      console.log(userIdArray);

      Stylist.findAll({
        where:{stylistId:userIdArray}
      }).then(stylists=>{
        var stylistIdArray = stylists.map(function(stylist){
          return stylist.stylistId;
        });
        User.findAll({
          where:{id:stylistIdArray}
        }).then(user=>{
          res.json(user);
          });
        console.log(stylistIdArray);
      })
      //res.json(users);
    })
  });

  ////////////////////////////////////////

  app.post('/skills',async function(req, res) {
    let userId = req.body.userId
    let data = []

    req.body.skills.forEach(jobType => {
      Object.keys(jobType.skillList).forEach(skill => {
        data.push({
          stylistId: userId,
          jobTypeId: jobType.jobId,
          skillId: skill
        })
      })
    })

    await skillsJobTypeStylists.destroy({
      where: {
        stylistId: userId
      }
    }).then(function(task) {
    });

    await skillsJobTypeStylists.bulkCreate(data
      ).then(skills => {
        res.json(skills);
      })
    });


  app.post('/jobtypePrices',async function(req, res){
    let userId = req.body.userId
    let jobTypeData = []
    req.body.jobtypePrices.forEach(jobType => {
      jobTypeData.push({
        stylistId: userId,
        jobTypeId: jobType.jobtypeId,
        price: jobType.price
      })
    })

    await jobTypeStylists.destroy({
      where: {
        stylistId: userId
      }
    }).then(function(task) {
    });

    await jobTypeStylists.bulkCreate(jobTypeData
      ).then(jobTypes => {
        res.json(jobTypes);
      })
    });


  app.get('/skills',function(req, res){
    skills.findAll({
    }).then(skills => {
      res.json(skills);
    })
  });


  app.get('/profile',function(req, res, next){
    var userId = req.query.id;
    User.findOne({
      where: { id : userId}
    }).then(user => {
      res.json(user);
    })
  });

  app.get('/stylistDetail',function(req, res, next){
    console.log("backend detail reached ");
    console.log(req.query.id);
    var userId = req.query.id;

    Stylist.findOne({
      where: { stylistId : userId}
    }).then(details => {
    //console.log(details);
    res.json(details);
  })

  });


  app.get('/jobType',function(req, res, next){
    jobType.findAll({

    }).then(jobTypes => {
      res.json(jobTypes);
    })
  });


  app.get('/skills',function(req, res, next){
    skills.findAll({
    }).then(skillsItems => {
      res.json(skillsItems);
    })
  });


  app.get('/jobTypeDetail',function(req, res, next){
    var userId = req.query.id;
    jobTypeStylists.findAll({
      where: { stylistId : userId}
    }).then(details => {
      res.json(details);
    })
  });


  app.get('/userType',function(req, res, next){
    userType.findAll({
    }).then(userTypes => {
      res.json(userTypes);
    })
  });


  app.get('/userTypeUsersDetail',function(req, res, next){
    var userId = req.query.id;
    userTypeUser.findAll({
      where: { userId : userId}
    }).then(details => {
      res.json(details);
    })
  });


  app.get('/SkillsJobTypeUsersDetail',function(req, res, next){
    var userId = req.query.id;
    skillsJobTypeStylists.findAll({
      where: { stylistId : userId}
    }).then(skillsDetails => {
      res.json(skillsDetails);
    })
  });

  // application -------------------------------------------------------------
  app.get('/HairB2Bfront/signup.html', function(req, res) {
    res.sendfile('./HairB2Bfront/signup.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.get('/HairB2Bfront/login.html', function(req, res) {
    res.sendfile('./HairB2Bfront/login.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.get('/HairB2Bfront/profile.html', function(req, res) {
    res.sendfile('./HairB2Bfront/profile.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.get('/HairB2Bfront/password.html', function(req, res) {
    res.sendfile('./HairB2Bfront/password.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.get('/HairB2Bfront/skills.html', function(req, res) {
    res.sendfile('./HairB2Bfront/skills.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.get('/HairB2Bfront/edit.html', function(req, res) {
    res.sendfile('./HairB2Bfront/edit.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
  app.get('/HairB2Bfront/headerAndFooter.html', function(req, res) {
    res.sendfile('./HairB2Bfront/headerAndFooter.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

}
