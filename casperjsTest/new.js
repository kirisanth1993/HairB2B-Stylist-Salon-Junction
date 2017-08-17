casper.test.begin('Redirect is happening for correct inputs',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/login');

  var x = require('casper').selectXPath;
  // casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/login',function(){
  //   this.fill('form#loginform',{'user':'kirisanth@gmail.com','password':'kirisanth'},true);
  //
  // });
  casper.then(function() {
    this.fill(x('/html/body/div/div/div[2]/form'),{'user':'kirisanth@gmail.com','password':'kirisanth'},true);

    this.test.assertExists(x('/html/body/div/div/div[2]/form/div[8]/div/button'),'Login button is exist');
    // this.clickLabel('Login','button
    this.capture('login.png');
  });

  // casper.then(function() {
  //   test.assertVisible('User Profile');
  // });

  casper.run(function(){
    test.done();
  });

});
