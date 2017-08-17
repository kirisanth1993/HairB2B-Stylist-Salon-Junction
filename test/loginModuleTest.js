var chai = require ('chai');
var sinon = require ('sinon');
var assert = chai.assert;

var User = require('../db/models/').User;
const login = require('../controllers/loginController');
var jwt = require('jwt-simple');

describe("login", function(){
  it ('Do not get the users for null emails ', async function(){
    var spy = sinon.spy();
    sinon.stub(User,"findOne").resolves({
      email : "kirisanth@gmail.com"
    });
    req = {
      body:{user:null}
    }
    res = {
      json:spy
    }
    await login(req,res);
    User.findOne.restore();
    var dataForNull = {noEmail:"There is no user name!", correctUser:"false"};
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith(dataForNull),true);
  });

  it ('not null emails didn\'t receive noEmail message', async function(){
    var spy = sinon.spy();
    sinon.stub(User,"findOne").resolves({
      email : "kirisanth@gmail.com"
    });
    req = {
      body:{emailId:"kirisanth@gmsil.com"}
    }
    res = {
      json:spy
    }
    await login(req,res);
    User.findOne.restore();
    var dataForNull = {noEmail:"There is no user name!", correctUser:"false"};
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith(dataForNull),false);
  });

  it ('There is no matched user', async function(){
    var spy = sinon.spy();
    sinon.stub(User,"findOne").resolves(null);
    req = {
      body:{emailId : "kirisanth@gmail.com"}
    }
    res = {
      json : spy
    }
    await login(req,res);
    User.findOne.restore();
    var dataForNoUser = {userNotFound:"No user with this Email Address !", correctUser:"false"};
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith(dataForNoUser),true);
  });

  it ('If The password is correct', async function(){
    var spy = sinon.spy();
    //var stub = sinon.stub().returnsThis();

    var user = {
      password : "1234",
      id : "55",
      email : "kirisanth@gmail.com",
      firstName : "kirisanth",
      lastName : "senthilnathan"
    }

    sinon.stub(User,"findOne").resolves({
      password : "1234",
      id : "55",
      email : "kirisanth@gmail.com",
      firstName : "kirisanth",
      lastName : "senthilnathan"
    });
    req = {
      body:{emailId:"kirisanth@gmail.com",password:"1234"}
    }
    res = {
      json : spy
    }
    await login(req,res);
    User.findOne.restore();
    var token = jwt.encode({id:user.id}, "Your Secret code");
    var dataForCorrectPw = {userToken:token,email:user.email,firstname:user.firstName,lastname:user.lastName,id:user.id,correctUser:"true"};
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith(dataForCorrectPw),true);


  });



  it ('If The password is Wrong', async function(){
    var spy = sinon.spy();
    //var stub = sinon.stub().returnsThis();

    var user = {
      password : "1234",
      id : "55",
      email : "kirisanth@gmail.com",
      firstName : "kirisanth",
      lastName : "senthilnathan"
    }

    sinon.stub(User,"findOne").resolves({
      password : "1234",
      id : "55",
      email : "kirisanth@gmail.com",
      firstName : "kirisanth",
      lastName : "senthilnathan"
    });
    req = {
      body:{emailId:"kirisanth@gmail.com",password:"van"}
    }
    res = {
      json : spy
    }
    await login(req,res);
    User.findOne.restore();
    var token = "wyewwuiui234423234rsr";
    var dataForWrongPw = {"message" : "Wrong user name or password", correctUser:"false"};
    assert.equal(spy.called,true);
    assert.equal(spy.calledWith(dataForWrongPw),true);
  });



});
