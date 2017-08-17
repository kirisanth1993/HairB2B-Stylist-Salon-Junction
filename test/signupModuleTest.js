var chai = require('chai');
var sinon = require('sinon');
var assert = chai.assert;

var User = require('../db/models/').User;
var Stylist = require('../db/models/').Stylist;
var Salons = require('../db/models/').Salons;
var userTypeUser = require('../db/models/').userTypeUser;


const signup = require('../controllers/signupController');
describe("signup",function(){
  it ('get users with same email', async function(){
    var spy = sinon.spy();
    sinon.stub(User,"findAll").resolves({
      email : "kirisanth@gmail.com"
    });
    req = {
      body:{user:"kirisanth@gmail.com"}
    };
    res = {
      json:spy
    }
    await signup(req,res);
    User.findAll.restore();
    //console.log(spy.called);
    var data = {signupError:"Account is already there !",correctAccount:"false"};
    assert.equal(spy.calledWith({signupError:"Account is already there !",correctAccount:"false"}).calledOnce);
    assert.equal(spy.called,true,"findAll function has been called");

  });


  it ('stylist and jobtype creation is held',async function(){
    var spy = sinon.spy();
    sinon.stub(User,"findAll").resolves([]);

    user = {
      firstName : 'kirisanth',
      lastName : 'senthilnathan',
      age : 44,
      location : 'Sydney',
      gender : 'Female',
      email : 'kirisanth@gmailcom',
      password : '12345',
      id : '55'
    }

    sinon.stub(User,"create").resolves({
      user:user
    });

    sinon.stub(Stylist,"create").resolves({
    });
    sinon.stub(userTypeUser,"create")({

    })

    req = {
      body:{
        user:"kirisanth@gmail.com",
        stylist : true,
        condition : 'It is the condition',
        description : 'It is the description',
        salon :false
      }
    }
    res = {
      json:spy
    }

    await signup(req,res);
    User.findAll.restore();
    User.create.restore();
    Stylist.create.restore();
    userTypeUser.create.restore();
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith({users:user,correctAccount:"true"}).calledOnce);

  });

  it ('salon and jobtype creation is held',async function(){
    var spy = sinon.spy();
    sinon.stub(User,"findAll").resolves([]);

    user = {
      firstName : 'kirisanth',
      lastName : 'senthilnathan',
      age : 44,
      location : 'Sydney',
      gender : 'Female',
      email : 'kirisanth@gmailcom',
      password : '12345',
      id : '55'
    }

    sinon.stub(User,"create").resolves({
      user:user
    });

    sinon.stub(Salons,"create").resolves({

    });

    sinon.stub(userTypeUser,"create")({

    })

    req = {
      body:{
        user:"kirisanth@gmail.com",
        stylist : false,
        condition : 'It is the condition',
        description : 'It is the description',
        salon :true
      }
    }
    res = {
      json:spy
    }

    await signup(req,res);
    User.findAll.restore();
    User.create.restore();
    Salons.create.restore();
    userTypeUser.create.restore();
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith({users:user,correctAccount:"true"}).calledOnce);

  });


});
