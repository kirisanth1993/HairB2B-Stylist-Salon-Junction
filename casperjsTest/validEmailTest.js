casper.test.begin('Invalid email ErrorMessage Checking for Signup Page.',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/signup');
  //var xPaths = require('casper').selectXPath;

  casper.then(function() {
    this.fill('form',{'email':'kirisanth'},true);
    test.assertSelectorHasText('span','Email is not valid');
    this.capture('invalidEmail.png');
  });

  casper.run(function(){
    test.done();
  });

});
