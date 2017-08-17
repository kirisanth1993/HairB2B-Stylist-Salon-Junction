casper.test.begin('Passwords are not matching test of Signup Page.',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/signup');
  //var xPaths = require('casper').selectXPath;

  casper.then(function() {
    this.fill('form',{'password':'kirisanth','sex':"Male",'repassword':'sdff','salon':true},true);

    //test.assertSelectorHasText('span','Email is not valid');
  });
  casper.wait(1000, function() {
       this.capture('unmatchingPassword.png');

  });

  casper.run(function(){
    test.done();
  });

});
