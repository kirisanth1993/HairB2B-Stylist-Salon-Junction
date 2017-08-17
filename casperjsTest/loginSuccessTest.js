casper.test.begin('Redirect is happening for correct inputs',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/login');
  var xPaths = require('casper').selectXPath;

  casper.then(function() {
    this.fill('form',{'user':'kirisanth@gmail.com','password':'kirisanth'},true);
    this.clickLabel('Login','button');
  });

  casper.wait(1000, function() {
       this.capture('profilePage.png');
       test.assertSelectorHasText('h3.panel-title','User Profile');
  });
  casper.run(function(){
    test.done();
  });

});
