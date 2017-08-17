casper.test.begin('Wrong inpus message appear',function suite(test){
  casper.start('http://localhost:8080/HairB2Bfront/headerAndFooter.html#!/login');
  var xPaths = require('casper').selectXPath;

  casper.then(function() {
    this.fill('form',{'user':'kzzanth@gmail.com','password':'wrongPassword'},true);
    this.clickLabel('Login','button');
  });

   casper.wait(1000, function() {
        this.capture('wrongFilling.png');
        test.assertSelectorHasText('div.control-label','User name or password is wrong!');
   });

  casper.run(function(){
    test.done();
  });

});
